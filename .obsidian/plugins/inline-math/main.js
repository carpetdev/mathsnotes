/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => NoMoreFlicker,
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  disableInTable: false,
  disableOnIME: true,
  disableDecorations: false,
  disableAtomicRanges: false,
};
var NoMoreFlickerSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl)
      .setName("Disable in tables")
      .setDesc(
        "If turned on, braces won't be inserted in tables. Decorations & atomic ranges are enabled regardless of this setting."
      )
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.disableInTable)
          .onChange(async (disable) => {
            this.plugin.settings.disableInTable = disable;
            await this.plugin.saveSettings();
          });
      });
    new import_obsidian.Setting(containerEl)
      .setName("Disable when using IME input")
      .setDesc(
        "This option can be helpful for avoiding some strange behavior occurring when using IME inputs after escaping from a math block with the Latex Suite plugin's tabout feature."
      )
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.disableOnIME)
          .onChange(async (disable) => {
            this.plugin.settings.disableOnIME = disable;
            await this.plugin.saveSettings();
          });
      });
    containerEl.createEl("h4", { text: "Debug mode" });
    new import_obsidian.Setting(containerEl)
      .setName("Disable decorations")
      .setDesc(
        "If turned on, decorations to hide braces adjacent to dollar signs are disabled."
      )
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.disableDecorations)
          .onChange(async (disable) => {
            this.plugin.settings.disableDecorations = disable;
            this.plugin.remakeViewPlugin();
            await this.plugin.saveSettings();
          });
      });
    new import_obsidian.Setting(containerEl)
      .setName("Disable atomic ranges")
      .setDesc(
        createFragment((el) => {
          el.createSpan({
            text: 'If turned on, atomic ranges to treat each of "',
          });
          el.createEl("code", { text: "${} " });
          el.createSpan({ text: '" or "' });
          el.createEl("code", { text: " {}$" });
          el.createSpan({ text: '" as one character are disabled.' });
        })
      )
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.disableAtomicRanges)
          .onChange(async (disable) => {
            this.plugin.settings.disableAtomicRanges = disable;
            this.plugin.remakeViewPlugin();
            await this.plugin.saveSettings();
          });
      });
    new import_obsidian.Setting(containerEl).addButton((button) => {
      button.setButtonText("Restore defaults").onClick(async () => {
        this.plugin.settings = Object.assign({}, DEFAULT_SETTINGS);
        await this.plugin.saveSettings();
        this.display();
      });
    });
  }
};

// src/cleaner.ts
var import_language2 = require("@codemirror/language");

// src/utils.ts
var import_language = require("@codemirror/language");
var INLINE_MATH_BEGIN =
  "formatting_formatting-math_formatting-math-begin_keyword_math";
var MATH_END =
  "formatting_formatting-math_formatting-math-end_keyword_math_math-";
function nodeText(node, state) {
  return state.sliceDoc(node.from, node.to);
}
function isInlineMathBegin(node, state) {
  return node.name == INLINE_MATH_BEGIN && nodeText(node, state) == "$";
}
function isInlineMathEnd(node, state) {
  return node.name == MATH_END && nodeText(node, state) == "$";
}
function selectionSatisfies(state, predicate) {
  let ret = false;
  const tree = (0, import_language.syntaxTree)(state);
  for (const { from } of state.selection.ranges) {
    const line = state.doc.lineAt(from);
    tree.iterate({
      from: line.from,
      to: line.to,
      enter: (node) => {
        if (predicate(node)) {
          ret = true;
        }
      },
    });
  }
  return ret;
}

// src/cleaner.ts
function cleaner(view) {
  const changes = [];
  (0, import_language2.syntaxTree)(view.state).iterate({
    enter(node) {
      if (isInlineMathBegin(node, view.state)) {
        if (view.state.sliceDoc(node.to, node.to + 3) == "{} ") {
          changes.push({ from: node.to, to: node.to + 3 });
        }
      } else if (isInlineMathEnd(node, view.state)) {
        if (view.state.sliceDoc(node.from - 3, node.from) == " {}") {
          changes.push({ from: node.from - 3, to: node.from });
        }
      }
    },
  });
  view.dispatch({ changes });
}
function cleanerCallback(editor) {
  const view = editor.cm;
  if (view) {
    cleaner(view);
  }
}

// src/decoration-and-atomic-range.ts
var import_state = require("@codemirror/state");
var import_view = require("@codemirror/view");
var import_language3 = require("@codemirror/language");
var DummyRangeValue = class extends import_state.RangeValue {};
var createViewPlugin = (plugin) =>
  import_view.ViewPlugin.fromClass(
    class {
      constructor(view) {
        this.impl(view);
      }
      update(update) {
        this.impl(update.view);
      }
      impl(view) {
        const decorationBulder = new import_state.RangeSetBuilder();
        const atomicRangeBulder = new import_state.RangeSetBuilder();
        const tree = (0, import_language3.syntaxTree)(view.state);
        for (const { from, to } of view.visibleRanges) {
          tree.iterate({
            from,
            to,
            enter(node) {
              if (isInlineMathBegin(node, view.state)) {
                if (view.state.sliceDoc(node.to, node.to + 3) == "{} ") {
                  decorationBulder.add(
                    node.to,
                    node.to + 3,
                    import_view.Decoration.replace({})
                  );
                  atomicRangeBulder.add(
                    node.from,
                    node.to + 3,
                    new DummyRangeValue()
                  );
                }
              } else if (isInlineMathEnd(node, view.state)) {
                if (view.state.sliceDoc(node.from - 3, node.from) == " {}") {
                  decorationBulder.add(
                    node.from - 3,
                    node.from,
                    import_view.Decoration.replace({})
                  );
                  atomicRangeBulder.add(
                    node.from - 3,
                    node.to,
                    new DummyRangeValue()
                  );
                }
              }
            },
          });
        }
        this.decorations = decorationBulder.finish();
        this.atomicRanges = atomicRangeBulder.finish();
      }
    },
    {
      decorations: (instance) =>
        plugin.settings.disableDecorations
          ? import_view.Decoration.none
          : instance.decorations,
      provide: (viewPlugin) =>
        import_view.EditorView.atomicRanges.of((view) => {
          var _a, _b;
          return plugin.settings.disableAtomicRanges
            ? import_state.RangeSet.empty
            : (_b =
                (_a = view.plugin(viewPlugin)) == null
                  ? void 0
                  : _a.atomicRanges) != null
            ? _b
            : import_state.RangeSet.empty;
        }),
    }
  );

// src/transaction-filter.ts
var import_state3 = require("@codemirror/state");
var import_language5 = require("@codemirror/language");

// src/latex-suite.ts
var import_state2 = require("@codemirror/state");
var import_language4 = require("@codemirror/language");
function handleLatexSuite(tr, plugin) {
  if (tr.docChanged && !tr.selection) {
    const changes = handleLatexSuiteBoxing(tr.startState, tr.changes);
    if (changes) {
      plugin._latexSuiteBoxing = true;
      return { changes };
    }
  } else if (!tr.docChanged && tr.selection) {
    if (plugin._latexSuiteBoxing) {
      plugin._latexSuiteBoxing = false;
      return { selection: { anchor: tr.selection.main.anchor - 3 } };
    } else {
      const selection = handleLatexSuiteTabout(tr.startState, tr.selection);
      return [tr, { selection }];
    }
  }
}
function handleLatexSuiteTabout(state, newSelection) {
  const tree = (0, import_language4.syntaxTree)(state);
  const doc = state.doc.toString();
  const newRanges = [];
  for (const range of newSelection.ranges) {
    const indexNextDollar = doc.indexOf("$", range.to);
    if (indexNextDollar >= 0) {
      const node = tree.cursorAt(indexNextDollar, 1).node;
      if (
        range.from === range.to &&
        range.to === indexNextDollar &&
        isInlineMathEnd(node, state) &&
        state.sliceDoc(node.from - 3, node.from) === " {}"
      ) {
        newRanges.push(import_state2.EditorSelection.cursor(node.to));
        continue;
      }
    }
    newRanges.push(range);
  }
  return import_state2.EditorSelection.create(
    newRanges,
    newSelection.mainIndex
  );
}
function handleLatexSuiteBoxing(state, changes) {
  const tree = (0, import_language4.syntaxTree)(state);
  let changeToReplace;
  changes.iterChanges((fromA, toA, fromB, toB, inserted) => {
    if (inserted.toString() === "\\boxed{" + state.sliceDoc(fromA, toA) + "}") {
      const nodeFrom = tree.cursorAt(fromA, -1).node;
      const nodeTo = tree.cursorAt(toA, 1).node;
      if (
        isInlineMathBegin(nodeFrom, state) &&
        isInlineMathEnd(nodeTo, state)
      ) {
        if (
          state.sliceDoc(fromA, fromA + 3) === "{} " &&
          state.sliceDoc(toA - 3, toA) === " {}"
        ) {
          changeToReplace = {
            from: fromA,
            to: toA,
            insert: "\\boxed{" + state.sliceDoc(fromA + 3, toA - 3) + "}",
          };
        }
      }
    }
  });
  return changeToReplace;
}

// src/transaction-filter.ts
var import_obsidian2 = require("obsidian");
var makeTransactionFilter = (plugin) => {
  return import_state3.EditorState.transactionFilter.of((tr) => {
    var _a;
    if (plugin.shouldIgnore(tr.startState)) return tr;
    const userEvent =
      (_a = tr.annotation(import_state3.Transaction.userEvent)) == null
        ? void 0
        : _a.split(".")[0];
    if (userEvent === "input") {
      if (!tr.changes.inserted.length) return tr;
      if (plugin.settings.disableOnIME) {
        const view = tr.startState.field(import_obsidian2.editorEditorField);
        if (view.composing) return tr;
      }
      const changes = getChangesForInsertion(tr.startState, tr.changes);
      return [tr, { changes }];
    } else if (userEvent === "select" && tr.selection) {
      const changes = getChangesForSelection(tr.startState, tr.selection);
      return [tr, { changes }];
    } else if (userEvent === "delete") {
      const changes = getChangesForDeletion(tr.startState);
      return [tr, { changes }];
    } else if (userEvent === void 0) {
      const spec = handleLatexSuite(tr, plugin);
      if (spec) return spec;
    }
    return tr;
  });
};
function getChangesForDeletion(state) {
  const tree = (0, import_language5.syntaxTree)(state);
  const doc = state.doc.toString();
  const changes = [];
  for (const range of state.selection.ranges) {
    const from = range.empty ? range.from - 4 : range.from;
    const to = range.to;
    const text = state.sliceDoc(from, to);
    const index = text.lastIndexOf("$");
    if (index == -1) {
      continue;
    }
    const indexNextDollar = doc.indexOf("$", from + index + 1);
    const indexPrevDollar = doc.lastIndexOf("$", from);
    tree.iterate({
      from: indexPrevDollar,
      to: indexNextDollar >= 0 ? indexNextDollar : to,
      enter(node) {
        if (
          isInlineMathBegin(node, state) &&
          state.sliceDoc(node.to, node.to + 3) == "{} "
        ) {
          changes.push({ from: node.to, to: node.to + 3 });
        } else if (
          isInlineMathEnd(node, state) &&
          state.sliceDoc(node.from - 3, node.from) == " {}"
        ) {
          changes.push({ from: node.from - 3, to: node.from });
        }
      },
    });
  }
  return changes;
}
function getChangesForInsertion(state, changes) {
  const tree = (0, import_language5.syntaxTree)(state);
  const doc = state.doc.toString();
  const changesToAdd = [];
  const beginningOfChanges = /* @__PURE__ */ new Set();
  changes.iterChangedRanges((fromA, toA, fromB, toB) => {
    beginningOfChanges.add(fromA);
  });
  for (const range of state.selection.ranges) {
    if (range.from >= 1) {
      const indexPrevDollar = doc.lastIndexOf("$", range.from - 1);
      if (indexPrevDollar >= 0) {
        const node = tree.cursorAt(indexPrevDollar, 1).node;
        if (isInlineMathBegin(node, state)) {
          if (
            indexPrevDollar === range.from - 1 &&
            beginningOfChanges.has(range.from)
          ) {
            changesToAdd.push({
              from: indexPrevDollar,
              to: range.from,
              insert: "${} ",
            });
            continue;
          }
          if (state.sliceDoc(node.to, node.to + 3) !== "{} ") {
            changesToAdd.push({ from: node.to, insert: "{} " });
          }
        } else if (
          isInlineMathEnd(node, state) &&
          state.sliceDoc(node.from - 3, node.from) === " {}"
        ) {
          const openIndex = doc.lastIndexOf("${} ", node.from - 3);
          changesToAdd.push({
            from: openIndex + 1,
            to: node.from,
            insert: doc.slice(openIndex + 4, node.from - 3).trim(),
          });
        }
      }
    }
    const indexNextDollar = doc.indexOf("$", range.to);
    if (indexNextDollar >= 0) {
      const node = tree.cursorAt(indexNextDollar, 1).node;
      if (isInlineMathEnd(node, state)) {
        if (state.sliceDoc(node.from - 3, node.from) !== " {}") {
          changesToAdd.push({ from: node.from, insert: " {}" });
        }
      } else if (
        isInlineMathBegin(node, state) &&
        state.sliceDoc(node.to, node.to + 3) === "{} "
      ) {
        const closeIndex = doc.indexOf(" {}$", node.to + 3);
        if (closeIndex >= 0) {
          changesToAdd.push({
            from: node.to,
            to: closeIndex + 3,
            insert: doc.slice(node.to + 3, closeIndex).trim(),
          });
        }
      }
    }
  }
  return changesToAdd;
}
function getChangesForSelection(state, newSelection) {
  const tree = (0, import_language5.syntaxTree)(state);
  const doc = state.doc.toString();
  const changes = [];
  for (let i = 0; i < newSelection.ranges.length; i++) {
    const range = newSelection.ranges[i];
    const indexNextDollar = doc.indexOf("$", range.to);
    const indexPrevDollar = doc.lastIndexOf("$", range.from - 1);
    if (indexPrevDollar >= 0) {
      const node = tree.cursorAt(indexPrevDollar, 1).node;
      if (
        isInlineMathEnd(node, state) &&
        state.sliceDoc(node.from - 3, node.from) === " {}"
      ) {
        const openIndex = doc.lastIndexOf("${} ", node.from - 3);
        changes.push({
          from: openIndex + 1,
          to: node.from,
          insert: doc.slice(openIndex + 4, node.from - 3).trim(),
        });
      }
    }
    if (indexNextDollar >= 0) {
      const node = tree.cursorAt(indexNextDollar, 1).node;
      if (
        isInlineMathBegin(node, state) &&
        state.sliceDoc(node.to, node.to + 3) === "{} "
      ) {
        const closeIndex = doc.indexOf(" {}$", node.to + 3);
        if (closeIndex >= 0) {
          changes.push({
            from: node.to,
            to: closeIndex + 3,
            insert: doc.slice(node.to + 3, closeIndex).trim(),
          });
        }
      }
    }
  }
  return changes;
}

// src/main.ts
var NoMoreFlicker = class extends import_obsidian3.Plugin {
  constructor() {
    super(...arguments);
    /**
     * a view plugin that provides
     * - decorations to hide braces adjacent to "$"s
     * - & atomic ranges to treat each of "${} " and " {}$" as one character
     */
    this.viewPlugin = [];
    /**
     * Indicates whether the previous transaction was the first of the two transactions
     * (1. text replacement & 2. cursor position change) that Latex Suite's "box current equation"
     * command produces or not. See the commend in the makeTransactionFilter() method for details.
     */
    this._latexSuiteBoxing = false;
  }
  async onload() {
    await this.loadSettings();
    await this.saveSettings();
    this.addSettingTab(new NoMoreFlickerSettingTab(this.app, this));
    this.registerEditorExtension(this.viewPlugin);
    this.remakeViewPlugin();
    this.registerEditorExtension(makeTransactionFilter(this));
    this.addCommand({
      id: "clean",
      name: "Clean up braces in this note",
      editorCallback: cleanerCallback,
    });
    this.addCommand({
      id: "clean-all",
      name: "Clean up braces in all the opened notes",
      editorCallback: this.cleanAllMarkdownViews.bind(this),
    });
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  shouldIgnore(state) {
    return (
      this.settings.disableInTable &&
      selectionSatisfies(
        state,
        (node) =>
          node.name.includes("HyperMD-table") || node.name.includes("hmd-table")
      )
    );
  }
  cleanAllMarkdownViews() {
    this.app.workspace.iterateAllLeaves((leaf) => {
      if (leaf.view instanceof import_obsidian3.MarkdownView) {
        cleanerCallback(leaf.view.editor);
      }
    });
  }
  remakeViewPlugin() {
    this.viewPlugin.length = 0;
    this.viewPlugin.push(createViewPlugin(this));
    this.app.workspace.updateOptions();
  }
};
