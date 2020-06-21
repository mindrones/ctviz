import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, g as attr_dev, h as toggle_class, j as add_location, k as insert_dev, l as append_dev, m as listen_dev, n as noop, o as bubble, p as set_data_dev, q as empty, r as getContext, u as setContext, w as create_component, x as claim_component, y as mount_component, z as transition_in, A as transition_out, B as destroy_component, C as space, D as claim_space, E as group_outros, F as check_outros, G as validate_each_argument, H as destroy_each, I as globals, J as null_to_empty, K as query_selector_all, L as set_input_value } from './client.6ac57baf.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}
function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}
peg$subclass(peg$SyntaxError, Error);
peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },
        "class": function(expectation) {
          var escapedParts = "",
              i;
          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }
          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },
        any: function(expectation) {
          return "any character";
        },
        end: function(expectation) {
          return "end of input";
        },
        other: function(expectation) {
          return expectation.description;
        }
      };
  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }
  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }
  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }
  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }
  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;
    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }
    descriptions.sort();
    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }
    switch (descriptions.length) {
      case 1:
        return descriptions[0];
      case 2:
        return descriptions[0] + " or " + descriptions[1];
      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }
  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }
  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};
function peg$parse(input, options) {
  options = options !== void 0 ? options : {};
  var peg$FAILED = {},
      peg$startRuleFunctions = { Root: peg$parseRoot, Preamble: peg$parsePreamble },
      peg$startRuleFunction  = peg$parseRoot,
      peg$c0 = function(x) {
          const comment = commentMap ? Array.from(commentMap.values()) : undefined;
          return { kind: "ast.root", content: x, comment };
        },
      peg$c1 = "begin{document}",
      peg$c2 = peg$literalExpectation("begin{document}", false),
      peg$c3 = function(e) { return e; },
      peg$c4 = peg$anyExpectation(),
      peg$c5 = function(x, rest) {
          const comment = commentMap ? Array.from(commentMap.values()) : undefined;
          return { kind: "ast.preamble", content: x, rest, comment };
        },
      peg$c6 = function(x) {
          return x;
        },
      peg$c7 = function() { return { kind: "parbreak", location: location() }; },
      peg$c8 = function(c) {
          timeKeeper && timeKeeper.check();
          return { kind: "text.string", content: c, location: location() };
        },
      peg$c9 = function(x) { return { kind: "superscript", arg: x, location: location() }; },
      peg$c10 = function(x) { return { kind: "subscript", arg: x, location: location() }; },
      peg$c11 = function(c) { return { kind: "math.character", content: c }; },
      peg$c12 = "%",
      peg$c13 = peg$literalExpectation("%", false),
      peg$c16 = peg$otherExpectation("special command"),
      peg$c17 = "verb*",
      peg$c18 = peg$literalExpectation("verb*", false),
      peg$c19 = "verb",
      peg$c20 = peg$literalExpectation("verb", false),
      peg$c21 = function(name, e, end) {return end === e;},
      peg$c22 = function(name, e, x, end) {return end === e;},
      peg$c23 = function(name, e, x) {
          return { kind: "verb", name, escape: e, content: x, location: location() };
        },
      peg$c24 = "begin{verbatim}",
      peg$c25 = peg$literalExpectation("begin{verbatim}", false),
      peg$c26 = "end{verbatim}",
      peg$c27 = peg$literalExpectation("end{verbatim}", false),
      peg$c28 = function(x) {
          return { kind: "env.verbatim", name: "verbatim", content: x, location: location() };
        },
      peg$c29 = "begin{verbatim*}",
      peg$c30 = peg$literalExpectation("begin{verbatim*}", false),
      peg$c31 = "end{verbatim*}",
      peg$c32 = peg$literalExpectation("end{verbatim*}", false),
      peg$c33 = function(x) {
          return { kind: "env.verbatim", name: "verbatim*", content: x, location: location() };
        },
      peg$c34 = "begin{minted}",
      peg$c35 = peg$literalExpectation("begin{minted}", false),
      peg$c36 = "end{minted}",
      peg$c37 = peg$literalExpectation("end{minted}", false),
      peg$c38 = function(args, x) {
          return { kind: "env.minted", name: "minted", args: args, content: x, location: location() };
        },
      peg$c39 = "begin{lstlisting}",
      peg$c40 = peg$literalExpectation("begin{lstlisting}", false),
      peg$c41 = "end{lstlisting}",
      peg$c42 = peg$literalExpectation("end{lstlisting}", false),
      peg$c43 = function(arg, x) {
          return { kind: "env.lstlisting", name: "lstlisting", arg: arg, content: x, location: location() };
        },
      peg$c44 = "begin{comment}",
      peg$c45 = peg$literalExpectation("begin{comment}", false),
      peg$c46 = "end{comment}",
      peg$c47 = peg$literalExpectation("end{comment}", false),
      peg$c48 = function(x) {
          return { kind: "env.comment", content: x, location: location() };
        },
      peg$c49 = function(t) {return t;},
      peg$c50 = function(eq) {
          return { kind: "inlineMath", content: eq, location: location() };
        },
      peg$c51 = function(x) {return x;},
      peg$c52 = function(x) {
          return { kind: "inlineMath", content: x, location: location() };
        },
      peg$c53 = function(x) {
          return { kind: "displayMath", content: x, location: location() };
        },
      peg$c54 = function(n, args) {
          return { kind: "command", name: n, args: args, location: location() };
        },
      peg$c55 = "@",
      peg$c56 = peg$literalExpectation("@", false),
      peg$c57 = "*",
      peg$c58 = peg$literalExpectation("*", false),
      peg$c59 = function(n) { return n + '*'; },
      peg$c60 = "\\*",
      peg$c61 = peg$literalExpectation("\\*", false),
      peg$c62 = "label",
      peg$c63 = peg$literalExpectation("label", false),
      peg$c64 = function(x) {
          return { kind: "command", name: "label", args: [x], location: location() };
        },
      peg$c65 = "end",
      peg$c66 = peg$literalExpectation("end", false),
      peg$c67 = /^[^a-zA-Z]/,
      peg$c68 = peg$classExpectation([["a", "z"], ["A", "Z"]], true, false),
      peg$c69 = "[",
      peg$c70 = peg$literalExpectation("[", false),
      peg$c71 = "]",
      peg$c72 = peg$literalExpectation("]", false),
      peg$c73 = "(",
      peg$c74 = peg$literalExpectation("(", false),
      peg$c75 = ")",
      peg$c76 = peg$literalExpectation(")", false),
      peg$c77 = "def",
      peg$c78 = peg$literalExpectation("def", false),
      peg$c79 = function(token, numArgs, grArg) {
          return { kind: "command.def", token, args: numArgs.concat([grArg]), location: location() };
        },
      peg$c80 = function(c) {return c;},
      peg$c81 = function(x) {
          return { kind: "arg.group", content: x, location: location() };
        },
      peg$c82 = function(x) {
          return { kind: "arg.group", content: [x], location: location() };
        },
      peg$c83 = function(c) {
          return { kind: "text.string", content: c, location: location() };
        },
      peg$c84 = "left",
      peg$c85 = peg$literalExpectation("left", false),
      peg$c86 = "right",
      peg$c87 = peg$literalExpectation("right", false),
      peg$c88 = function(l, c) {return c;},
      peg$c89 = function(l, x, r) {
          return { kind: "math.matching_delimiters", left: l, right: r, content: x, location: location() };
        },
      peg$c90 = /^[()[\]|\/.]/,
      peg$c91 = peg$classExpectation(["(", ")", "[", "]", "|", "/", "."], false, false),
      peg$c92 = /^[{}]/,
      peg$c93 = peg$classExpectation(["{", "}"], false, false),
      peg$c94 = function(l, c) { return c;},
      peg$c95 = function(l, x, r) {
          return { kind: "math.math_delimiters", lcommand: l, rcommand: r, left: "(", right: ")", content: x, location: location() };
        },
      peg$c96 = function(l, x, r) {
          return { kind: "math.math_delimiters", lcommand: l, rcommand: r, left: "[", right: "]", content: x, location: location() };
        },
      peg$c97 = "\\{",
      peg$c98 = peg$literalExpectation("\\{", false),
      peg$c99 = "\\}",
      peg$c100 = peg$literalExpectation("\\}", false),
      peg$c101 = function(l, x, r) {
          return { kind: "math.math_delimiters", lcommand: l, rcommand: r, left: "\\{", right: "\\}", content: x, location: location() };
        },
      peg$c102 = "bigg",
      peg$c103 = peg$literalExpectation("bigg", false),
      peg$c104 = "Bigg",
      peg$c105 = peg$literalExpectation("Bigg", false),
      peg$c106 = "big",
      peg$c107 = peg$literalExpectation("big", false),
      peg$c108 = "Big",
      peg$c109 = peg$literalExpectation("Big", false),
      peg$c110 = /^[rlm]/,
      peg$c111 = peg$classExpectation(["r", "l", "m"], false, false),
      peg$c112 = function(body) {
          return { kind: "arg.optional", content: body, location: location() };
        },
      peg$c113 = function() { return {kind:"parbreak", location: location()}; },
      peg$c114 = ",",
      peg$c115 = peg$literalExpectation(",", false),
      peg$c116 = function(c) { return { kind: "text.string", content: c, location: location() }; },
      peg$c117 = function() {
          return { kind: "text.string", content: ",", location: location() };
        },
      peg$c118 = function(name, args, n) {return name === n;},
      peg$c119 = function(name, args, x) {return x;},
      peg$c120 = function(name, args, body) {
          return { kind: "env", name, args, content: body, location: location() };
        },
      peg$c121 = function(name, n) {return name === n;},
      peg$c122 = function(name, x) {return x;},
      peg$c123 = function(name, body) {
          return { kind: "env.math.align", name, args: [], content: body, location: location() };
        },
      peg$c124 = function(name, body) {
          return { kind: "env.math.aligned", name, args: [], content: body, location: location() };
        },
      peg$c125 = function(x) {
          return x;
        },
      peg$c126 = "text",
      peg$c127 = peg$literalExpectation("text", false),
      peg$c128 = function(arg) {
          return { kind: "command.text", arg: arg, location: location() };
        },
      peg$c130 = "begin",
      peg$c131 = peg$literalExpectation("begin", false),
      peg$c132 = "equation*",
      peg$c133 = peg$literalExpectation("equation*", false),
      peg$c134 = "equation",
      peg$c135 = peg$literalExpectation("equation", false),
      peg$c136 = "align*",
      peg$c137 = peg$literalExpectation("align*", false),
      peg$c138 = "align",
      peg$c139 = peg$literalExpectation("align", false),
      peg$c140 = "alignat*",
      peg$c141 = peg$literalExpectation("alignat*", false),
      peg$c142 = "alignat",
      peg$c143 = peg$literalExpectation("alignat", false),
      peg$c144 = "gather*",
      peg$c145 = peg$literalExpectation("gather*", false),
      peg$c146 = "gather",
      peg$c147 = peg$literalExpectation("gather", false),
      peg$c148 = "multline*",
      peg$c149 = peg$literalExpectation("multline*", false),
      peg$c150 = "multline",
      peg$c151 = peg$literalExpectation("multline", false),
      peg$c152 = "flalign*",
      peg$c153 = peg$literalExpectation("flalign*", false),
      peg$c154 = "flalign",
      peg$c155 = peg$literalExpectation("flalign", false),
      peg$c156 = "math",
      peg$c157 = peg$literalExpectation("math", false),
      peg$c158 = "displaymath",
      peg$c159 = peg$literalExpectation("displaymath", false),
      peg$c160 = "aligned",
      peg$c161 = peg$literalExpectation("aligned", false),
      peg$c162 = "alignedat",
      peg$c163 = peg$literalExpectation("alignedat", false),
      peg$c164 = "cases",
      peg$c165 = peg$literalExpectation("cases", false),
      peg$c166 = "cases*",
      peg$c167 = peg$literalExpectation("cases*", false),
      peg$c168 = "gathered",
      peg$c169 = peg$literalExpectation("gathered", false),
      peg$c170 = "split",
      peg$c171 = peg$literalExpectation("split", false),
      peg$c172 = "\\",
      peg$c173 = peg$literalExpectation("\\", false),
      peg$c174 = "{",
      peg$c175 = peg$literalExpectation("{", false),
      peg$c176 = "}",
      peg$c177 = peg$literalExpectation("}", false),
      peg$c178 = "$",
      peg$c179 = peg$literalExpectation("$", false),
      peg$c180 = "&",
      peg$c181 = peg$literalExpectation("&", false),
      peg$c182 = function() {
          return { kind: "alignmentTab", location: location() };
        },
      peg$c183 = "#",
      peg$c184 = peg$literalExpectation("#", false),
      peg$c185 = "^",
      peg$c186 = peg$literalExpectation("^", false),
      peg$c187 = function() {
          return { kind: "superscript", arg: undefined, location: location() };
        },
      peg$c188 = "_",
      peg$c189 = peg$literalExpectation("_", false),
      peg$c190 = function() {
          return { kind: "subscript", arg: undefined, location: location() };
        },
      peg$c191 = "\0",
      peg$c192 = peg$literalExpectation("\0", false),
      peg$c193 = function() {
          return { kind: "ignore", location: location() };
        },
      peg$c194 = /^[a-zA-Z]/,
      peg$c195 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false),
      peg$c196 = /^[0-9]/,
      peg$c197 = peg$classExpectation([["0", "9"]], false, false),
      peg$c200 = "~",
      peg$c201 = peg$literalExpectation("~", false),
      peg$c202 = function() {
          return { kind: "activeCharacter", location: location() };
        },
      peg$c203 = function(n) {
          return { kind: "commandParameter", nargs: n, location: location() };
        },
      peg$c204 = "document",
      peg$c205 = peg$literalExpectation("document", false),
      peg$c206 = function(c) {
          return c;
        },
      peg$c207 = "\n",
      peg$c208 = peg$literalExpectation("\n", false),
      peg$c209 = "\r\n",
      peg$c210 = peg$literalExpectation("\r\n", false),
      peg$c211 = "\r",
      peg$c212 = peg$literalExpectation("\r", false),
      peg$c213 = "\u2028",
      peg$c214 = peg$literalExpectation("\u2028", false),
      peg$c215 = "\u2029",
      peg$c216 = peg$literalExpectation("\u2029", false),
      peg$c217 = /^[ \t]/,
      peg$c218 = peg$classExpectation([" ", "\t"], false, false),
      peg$c219 = peg$otherExpectation("spaces"),
      peg$c220 = function(c) {
          if (options.enableComment) {
            const loc = location();
            const locJson = JSON.stringify(loc);
            if (!commentMap.has(locJson)) {
              commentMap.set(locJson, { kind: "comment", content: c, location: loc } );
            }
          }
        },
      peg$c221 = function() {
          return undefined;
        },
      peg$c222 = "par",
      peg$c223 = peg$literalExpectation("par", false),
      peg$c224 = function() {
          return true;
        },
      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,
      peg$result;
  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }
    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }
  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }
  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }
  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }
  function peg$anyExpectation() {
    return { type: "any" };
  }
  function peg$endExpectation() {
    return { type: "end" };
  }
  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }
  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;
    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }
      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };
      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }
        p++;
      }
      peg$posDetailsCache[pos] = details;
      return details;
    }
  }
  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }
  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }
    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }
    peg$maxFailExpected.push(expected);
  }
  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }
  function peg$parseRoot() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseElement();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseElement();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsePreamble() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$currPos;
      s6 = peg$parseescape();
      if (s6 !== peg$FAILED) {
        if (input.substr(peg$currPos, 15) === peg$c1) {
          s7 = peg$c1;
          peg$currPos += 15;
        } else {
          s7 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c2); }
        }
        if (s7 !== peg$FAILED) {
          s6 = [s6, s7];
          s5 = s6;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
      } else {
        peg$currPos = s5;
        s5 = peg$FAILED;
      }
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseElement();
        if (s5 !== peg$FAILED) {
          peg$savedPos = s3;
          s4 = peg$c3(s5);
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$currPos;
        s6 = peg$parseescape();
        if (s6 !== peg$FAILED) {
          if (input.substr(peg$currPos, 15) === peg$c1) {
            s7 = peg$c1;
            peg$currPos += 15;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c2); }
          }
          if (s7 !== peg$FAILED) {
            s6 = [s6, s7];
            s5 = s6;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseElement();
          if (s5 !== peg$FAILED) {
            peg$savedPos = s3;
            s4 = peg$c3(s5);
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = peg$currPos;
        s5 = peg$parseescape();
        if (s5 !== peg$FAILED) {
          if (input.substr(peg$currPos, 15) === peg$c1) {
            s6 = peg$c1;
            peg$currPos += 15;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c2); }
          }
          if (s6 !== peg$FAILED) {
            s7 = [];
            if (input.length > peg$currPos) {
              s8 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            while (s8 !== peg$FAILED) {
              s7.push(s8);
              if (input.length > peg$currPos) {
                s8 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
              }
            }
            if (s7 !== peg$FAILED) {
              s5 = [s5, s6, s7];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c5(s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseElement() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parseElement_p();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c6(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseElement_p() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$parseSpecialCommand();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsebreak();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c7();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$parseDefCommand();
        if (s0 === peg$FAILED) {
          s0 = peg$parseCommand();
          if (s0 === peg$FAILED) {
            s0 = peg$parseGroup();
            if (s0 === peg$FAILED) {
              s0 = peg$parseInlineMathShift();
              if (s0 === peg$FAILED) {
                s0 = peg$parseAlignmentTab();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseCommandParameterWithNumber();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseSuperscript();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseSubscript();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseActiveCharacter();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseignore();
                          if (s0 === peg$FAILED) {
                            s0 = peg$currPos;
                            s1 = peg$currPos;
                            s2 = [];
                            s3 = peg$currPos;
                            s4 = peg$currPos;
                            peg$silentFails++;
                            s5 = peg$parsenoncharToken();
                            peg$silentFails--;
                            if (s5 === peg$FAILED) {
                              s4 = void 0;
                            } else {
                              peg$currPos = s4;
                              s4 = peg$FAILED;
                            }
                            if (s4 !== peg$FAILED) {
                              if (input.length > peg$currPos) {
                                s5 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c4); }
                              }
                              if (s5 !== peg$FAILED) {
                                s4 = [s4, s5];
                                s3 = s4;
                              } else {
                                peg$currPos = s3;
                                s3 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s3;
                              s3 = peg$FAILED;
                            }
                            if (s3 !== peg$FAILED) {
                              while (s3 !== peg$FAILED) {
                                s2.push(s3);
                                s3 = peg$currPos;
                                s4 = peg$currPos;
                                peg$silentFails++;
                                s5 = peg$parsenoncharToken();
                                peg$silentFails--;
                                if (s5 === peg$FAILED) {
                                  s4 = void 0;
                                } else {
                                  peg$currPos = s4;
                                  s4 = peg$FAILED;
                                }
                                if (s4 !== peg$FAILED) {
                                  if (input.length > peg$currPos) {
                                    s5 = input.charAt(peg$currPos);
                                    peg$currPos++;
                                  } else {
                                    s5 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c4); }
                                  }
                                  if (s5 !== peg$FAILED) {
                                    s4 = [s4, s5];
                                    s3 = s4;
                                  } else {
                                    peg$currPos = s3;
                                    s3 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s3;
                                  s3 = peg$FAILED;
                                }
                              }
                            } else {
                              s2 = peg$FAILED;
                            }
                            if (s2 !== peg$FAILED) {
                              s1 = input.substring(s1, peg$currPos);
                            } else {
                              s1 = s2;
                            }
                            if (s1 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$c8(s1);
                            }
                            s0 = s1;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parseMathElement() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parseMathElement_p();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c6(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseMathElement_p() {
    var s0, s1, s2, s3, s4;
    s0 = peg$parseMathAlignedEnvironment();
    if (s0 === peg$FAILED) {
      s0 = peg$parseAmsmathTextCommand();
      if (s0 === peg$FAILED) {
        s0 = peg$parseSpecialCommand();
        if (s0 === peg$FAILED) {
          s0 = peg$parseMatchingDelimiters();
          if (s0 === peg$FAILED) {
            s0 = peg$parseMathematicalDelimiters();
            if (s0 === peg$FAILED) {
              s0 = peg$parseMathCommand();
              if (s0 === peg$FAILED) {
                s0 = peg$parseMathGroup();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseAlignmentTab();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseCommandParameterWithNumber();
                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos;
                      s1 = peg$parseSuperscript();
                      if (s1 !== peg$FAILED) {
                        s2 = peg$parseskip_space();
                        if (s2 !== peg$FAILED) {
                          s3 = peg$parseMathElement();
                          if (s3 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c9(s3);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        s1 = peg$parseSubscript();
                        if (s1 !== peg$FAILED) {
                          s2 = peg$parseskip_space();
                          if (s2 !== peg$FAILED) {
                            s3 = peg$parseMathElement();
                            if (s3 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$c10(s3);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseActiveCharacter();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parseignore();
                            if (s0 === peg$FAILED) {
                              s0 = peg$currPos;
                              s1 = peg$currPos;
                              s2 = peg$currPos;
                              s3 = peg$currPos;
                              peg$silentFails++;
                              s4 = peg$parsenonMathcharToken();
                              peg$silentFails--;
                              if (s4 === peg$FAILED) {
                                s3 = void 0;
                              } else {
                                peg$currPos = s3;
                                s3 = peg$FAILED;
                              }
                              if (s3 !== peg$FAILED) {
                                if (input.length > peg$currPos) {
                                  s4 = input.charAt(peg$currPos);
                                  peg$currPos++;
                                } else {
                                  s4 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c4); }
                                }
                                if (s4 !== peg$FAILED) {
                                  s3 = [s3, s4];
                                  s2 = s3;
                                } else {
                                  peg$currPos = s2;
                                  s2 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s2;
                                s2 = peg$FAILED;
                              }
                              if (s2 !== peg$FAILED) {
                                s1 = input.substring(s1, peg$currPos);
                              } else {
                                s1 = s2;
                              }
                              if (s1 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c11(s1);
                              }
                              s0 = s1;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parsenonMathcharToken() {
    var s0;
    s0 = peg$parsemathShift();
    if (s0 === peg$FAILED) {
      s0 = peg$parseescape();
    }
    return s0;
  }
  function peg$parsenoncharToken() {
    var s0;
    s0 = peg$parseescape();
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 37) {
        s0 = peg$c12;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parsebeginGroup();
        if (s0 === peg$FAILED) {
          s0 = peg$parseendGroup();
          if (s0 === peg$FAILED) {
            s0 = peg$parsemathShift();
            if (s0 === peg$FAILED) {
              s0 = peg$parseAlignmentTab();
              if (s0 === peg$FAILED) {
                s0 = peg$parsenl();
                if (s0 === peg$FAILED) {
                  s0 = peg$parsecommandParameter();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseSuperscript();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseSubscript();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseignore();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parsesp();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parseEOF();
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parseSpecialCommand() {
    var s0;
    peg$silentFails++;
    s0 = peg$parseVerb();
    if (s0 === peg$FAILED) {
      s0 = peg$parseVerbatim();
      if (s0 === peg$FAILED) {
        s0 = peg$parseMinted();
        if (s0 === peg$FAILED) {
          s0 = peg$parseLstlisting();
          if (s0 === peg$FAILED) {
            s0 = peg$parsecommentenv();
            if (s0 === peg$FAILED) {
              s0 = peg$parseDisplayMath();
              if (s0 === peg$FAILED) {
                s0 = peg$parseInlineMathParen();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseMathEnvironment();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseEnvironment();
                  }
                }
              }
            }
          }
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      if (peg$silentFails === 0) { peg$fail(peg$c16); }
    }
    return s0;
  }
  function peg$parseVerb() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 5) === peg$c17) {
        s2 = peg$c17;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c18); }
      }
      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c19) {
          s2 = peg$c19;
          peg$currPos += 4;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c20); }
        }
      }
      if (s2 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$currPos;
          s7 = peg$currPos;
          peg$silentFails++;
          s8 = peg$currPos;
          if (input.length > peg$currPos) {
            s9 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s9 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
          if (s9 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s10 = peg$c21(s2, s3, s9);
            if (s10) {
              s10 = void 0;
            } else {
              s10 = peg$FAILED;
            }
            if (s10 !== peg$FAILED) {
              s9 = [s9, s10];
              s8 = s9;
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
          } else {
            peg$currPos = s8;
            s8 = peg$FAILED;
          }
          peg$silentFails--;
          if (s8 === peg$FAILED) {
            s7 = void 0;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          if (s7 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s8 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s8 !== peg$FAILED) {
              s7 = [s7, s8];
              s6 = s7;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$currPos;
            s7 = peg$currPos;
            peg$silentFails++;
            s8 = peg$currPos;
            if (input.length > peg$currPos) {
              s9 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s9 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s9 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s10 = peg$c21(s2, s3, s9);
              if (s10) {
                s10 = void 0;
              } else {
                s10 = peg$FAILED;
              }
              if (s10 !== peg$FAILED) {
                s9 = [s9, s10];
                s8 = s9;
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
            peg$silentFails--;
            if (s8 === peg$FAILED) {
              s7 = void 0;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s8 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
              }
              if (s8 !== peg$FAILED) {
                s7 = [s7, s8];
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            if (input.length > peg$currPos) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s6 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s7 = peg$c22(s2, s3, s4, s6);
              if (s7) {
                s7 = void 0;
              } else {
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c23(s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseVerbatim() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 15) === peg$c24) {
        s2 = peg$c24;
        peg$currPos += 15;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$currPos;
        s6 = peg$currPos;
        peg$silentFails++;
        s7 = peg$currPos;
        s8 = peg$parseescape();
        if (s8 !== peg$FAILED) {
          if (input.substr(peg$currPos, 13) === peg$c26) {
            s9 = peg$c26;
            peg$currPos += 13;
          } else {
            s9 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c27); }
          }
          if (s9 !== peg$FAILED) {
            s8 = [s8, s9];
            s7 = s8;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
        } else {
          peg$currPos = s7;
          s7 = peg$FAILED;
        }
        peg$silentFails--;
        if (s7 === peg$FAILED) {
          s6 = void 0;
        } else {
          peg$currPos = s6;
          s6 = peg$FAILED;
        }
        if (s6 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s7 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
          if (s7 !== peg$FAILED) {
            s6 = [s6, s7];
            s5 = s6;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$currPos;
          s8 = peg$parseescape();
          if (s8 !== peg$FAILED) {
            if (input.substr(peg$currPos, 13) === peg$c26) {
              s9 = peg$c26;
              peg$currPos += 13;
            } else {
              s9 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c27); }
            }
            if (s9 !== peg$FAILED) {
              s8 = [s8, s9];
              s7 = s8;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseescape();
          if (s4 !== peg$FAILED) {
            if (input.substr(peg$currPos, 13) === peg$c26) {
              s5 = peg$c26;
              peg$currPos += 13;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c27); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c28(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseescape();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 16) === peg$c29) {
          s2 = peg$c29;
          peg$currPos += 16;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c30); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$currPos;
          s8 = peg$parseescape();
          if (s8 !== peg$FAILED) {
            if (input.substr(peg$currPos, 14) === peg$c31) {
              s9 = peg$c31;
              peg$currPos += 14;
            } else {
              s9 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c32); }
            }
            if (s9 !== peg$FAILED) {
              s8 = [s8, s9];
              s7 = s8;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$currPos;
            peg$silentFails++;
            s7 = peg$currPos;
            s8 = peg$parseescape();
            if (s8 !== peg$FAILED) {
              if (input.substr(peg$currPos, 14) === peg$c31) {
                s9 = peg$c31;
                peg$currPos += 14;
              } else {
                s9 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c32); }
              }
              if (s9 !== peg$FAILED) {
                s8 = [s8, s9];
                s7 = s8;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            peg$silentFails--;
            if (s7 === peg$FAILED) {
              s6 = void 0;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s7 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
              }
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseescape();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 14) === peg$c31) {
                s5 = peg$c31;
                peg$currPos += 14;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c32); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c33(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseMinted() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 13) === peg$c34) {
        s2 = peg$c34;
        peg$currPos += 13;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = peg$parseargumentList();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseGroup();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 === peg$FAILED) {
          s3 = peg$parseGroup();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$currPos;
          s7 = peg$currPos;
          peg$silentFails++;
          s8 = peg$currPos;
          s9 = peg$parseescape();
          if (s9 !== peg$FAILED) {
            if (input.substr(peg$currPos, 11) === peg$c36) {
              s10 = peg$c36;
              peg$currPos += 11;
            } else {
              s10 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c37); }
            }
            if (s10 !== peg$FAILED) {
              s9 = [s9, s10];
              s8 = s9;
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
          } else {
            peg$currPos = s8;
            s8 = peg$FAILED;
          }
          peg$silentFails--;
          if (s8 === peg$FAILED) {
            s7 = void 0;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          if (s7 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s8 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s8 !== peg$FAILED) {
              s7 = [s7, s8];
              s6 = s7;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$currPos;
            s7 = peg$currPos;
            peg$silentFails++;
            s8 = peg$currPos;
            s9 = peg$parseescape();
            if (s9 !== peg$FAILED) {
              if (input.substr(peg$currPos, 11) === peg$c36) {
                s10 = peg$c36;
                peg$currPos += 11;
              } else {
                s10 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c37); }
              }
              if (s10 !== peg$FAILED) {
                s9 = [s9, s10];
                s8 = s9;
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
            peg$silentFails--;
            if (s8 === peg$FAILED) {
              s7 = void 0;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s8 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
              }
              if (s8 !== peg$FAILED) {
                s7 = [s7, s8];
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseescape();
            if (s5 !== peg$FAILED) {
              if (input.substr(peg$currPos, 11) === peg$c36) {
                s6 = peg$c36;
                peg$currPos += 11;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c37); }
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c38(s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLstlisting() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 17) === peg$c39) {
        s2 = peg$c39;
        peg$currPos += 17;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseargumentList();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$currPos;
          s7 = peg$currPos;
          peg$silentFails++;
          s8 = peg$currPos;
          s9 = peg$parseescape();
          if (s9 !== peg$FAILED) {
            if (input.substr(peg$currPos, 15) === peg$c41) {
              s10 = peg$c41;
              peg$currPos += 15;
            } else {
              s10 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c42); }
            }
            if (s10 !== peg$FAILED) {
              s9 = [s9, s10];
              s8 = s9;
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
          } else {
            peg$currPos = s8;
            s8 = peg$FAILED;
          }
          peg$silentFails--;
          if (s8 === peg$FAILED) {
            s7 = void 0;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          if (s7 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s8 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s8 !== peg$FAILED) {
              s7 = [s7, s8];
              s6 = s7;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$currPos;
            s7 = peg$currPos;
            peg$silentFails++;
            s8 = peg$currPos;
            s9 = peg$parseescape();
            if (s9 !== peg$FAILED) {
              if (input.substr(peg$currPos, 15) === peg$c41) {
                s10 = peg$c41;
                peg$currPos += 15;
              } else {
                s10 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c42); }
              }
              if (s10 !== peg$FAILED) {
                s9 = [s9, s10];
                s8 = s9;
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
            peg$silentFails--;
            if (s8 === peg$FAILED) {
              s7 = void 0;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s8 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
              }
              if (s8 !== peg$FAILED) {
                s7 = [s7, s8];
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseescape();
            if (s5 !== peg$FAILED) {
              if (input.substr(peg$currPos, 15) === peg$c41) {
                s6 = peg$c41;
                peg$currPos += 15;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c42); }
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c43(s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsecommentenv() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 14) === peg$c44) {
        s2 = peg$c44;
        peg$currPos += 14;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c45); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$currPos;
        s6 = peg$currPos;
        peg$silentFails++;
        s7 = peg$currPos;
        s8 = peg$parseescape();
        if (s8 !== peg$FAILED) {
          if (input.substr(peg$currPos, 12) === peg$c46) {
            s9 = peg$c46;
            peg$currPos += 12;
          } else {
            s9 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c47); }
          }
          if (s9 !== peg$FAILED) {
            s8 = [s8, s9];
            s7 = s8;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
        } else {
          peg$currPos = s7;
          s7 = peg$FAILED;
        }
        peg$silentFails--;
        if (s7 === peg$FAILED) {
          s6 = void 0;
        } else {
          peg$currPos = s6;
          s6 = peg$FAILED;
        }
        if (s6 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s7 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
          if (s7 !== peg$FAILED) {
            s6 = [s6, s7];
            s5 = s6;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$currPos;
          s8 = peg$parseescape();
          if (s8 !== peg$FAILED) {
            if (input.substr(peg$currPos, 12) === peg$c46) {
              s9 = peg$c46;
              peg$currPos += 12;
            } else {
              s9 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c47); }
            }
            if (s9 !== peg$FAILED) {
              s8 = [s8, s9];
              s7 = s8;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseescape();
          if (s4 !== peg$FAILED) {
            if (input.substr(peg$currPos, 12) === peg$c46) {
              s5 = peg$c46;
              peg$currPos += 12;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c47); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c48(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseInlineMathShift() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    s1 = peg$parsemathShift();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$currPos;
        peg$silentFails++;
        s6 = peg$parsemathShift();
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = void 0;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseMathElement();
          if (s6 !== peg$FAILED) {
            peg$savedPos = s4;
            s5 = peg$c49(s6);
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$currPos;
            peg$silentFails++;
            s6 = peg$parsemathShift();
            peg$silentFails--;
            if (s6 === peg$FAILED) {
              s5 = void 0;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseMathElement();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c49(s6);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsemathShift();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c50(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsemathShift();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsewhitespace();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$currPos;
          peg$silentFails++;
          s6 = peg$parsemathShift();
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = void 0;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseMathElement();
            if (s6 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c49(s6);
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$currPos;
            peg$silentFails++;
            s6 = peg$parsemathShift();
            peg$silentFails--;
            if (s6 === peg$FAILED) {
              s5 = void 0;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseMathElement();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c49(s6);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsemathShift();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c50(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseInlineMathParen() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    s1 = peg$parsebeginInlineMath();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$currPos;
        peg$silentFails++;
        s6 = peg$parseendInlineMath();
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = void 0;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseMathElement();
          if (s6 !== peg$FAILED) {
            peg$savedPos = s4;
            s5 = peg$c51(s6);
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          s5 = peg$currPos;
          peg$silentFails++;
          s6 = peg$parseendInlineMath();
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = void 0;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseMathElement();
            if (s6 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c51(s6);
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseendInlineMath();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c52(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseDisplayMath() {
    var s0;
    s0 = peg$parsedisplayMathSquareBracket();
    if (s0 === peg$FAILED) {
      s0 = peg$parsedisplayMathShiftShift();
    }
    return s0;
  }
  function peg$parsedisplayMathSquareBracket() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    s1 = peg$parsebeginDisplayMath();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$currPos;
        peg$silentFails++;
        s6 = peg$parseendDisplayMath();
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = void 0;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseMathElement();
          if (s6 !== peg$FAILED) {
            peg$savedPos = s4;
            s5 = peg$c51(s6);
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          s5 = peg$currPos;
          peg$silentFails++;
          s6 = peg$parseendDisplayMath();
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = void 0;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseMathElement();
            if (s6 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c51(s6);
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseendDisplayMath();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c53(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsedisplayMathShiftShift() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
    s0 = peg$currPos;
    s1 = peg$parsemathShift();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsemathShift();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$currPos;
          s8 = peg$parsemathShift();
          if (s8 !== peg$FAILED) {
            s9 = peg$parsemathShift();
            if (s9 !== peg$FAILED) {
              s8 = [s8, s9];
              s7 = s8;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            s7 = peg$parseMathElement();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s5;
              s6 = peg$c51(s7);
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$currPos;
            peg$silentFails++;
            s7 = peg$currPos;
            s8 = peg$parsemathShift();
            if (s8 !== peg$FAILED) {
              s9 = peg$parsemathShift();
              if (s9 !== peg$FAILED) {
                s8 = [s8, s9];
                s7 = s8;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            peg$silentFails--;
            if (s7 === peg$FAILED) {
              s6 = void 0;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseMathElement();
              if (s7 !== peg$FAILED) {
                peg$savedPos = s5;
                s6 = peg$c51(s7);
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsemathShift();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsemathShift();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c53(s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseCommand() {
    var s0, s1, s2, s3, s4;
    s0 = peg$parseLabelCommand();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseescape();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecommandName();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseargumentList();
          if (s4 === peg$FAILED) {
            s4 = peg$parseGroup();
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseargumentList();
            if (s4 === peg$FAILED) {
              s4 = peg$parseGroup();
            }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c54(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parsecommandName() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parsechar();
    if (s3 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 64) {
        s3 = peg$c55;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c56); }
      }
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsechar();
        if (s3 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 64) {
            s3 = peg$c55;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c56); }
          }
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 42) {
          s3 = peg$c57;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c58); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c59(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechar();
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 64) {
          s2 = peg$c55;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c56); }
        }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechar();
          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 64) {
              s2 = peg$c55;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c56); }
            }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c60) {
          s0 = peg$c60;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c61); }
        }
        if (s0 === peg$FAILED) {
          if (input.length > peg$currPos) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
        }
      }
    }
    return s0;
  }
  function peg$parseLabelCommand() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 5) === peg$c62) {
        s2 = peg$c62;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c63); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseLabelGroup();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c64(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseMathCommand() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$parseLabelCommand();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseescape();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parsenonMathCommandName();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecommandName();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseargumentList();
          if (s4 === peg$FAILED) {
            s4 = peg$parseMathGroup();
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseargumentList();
            if (s4 === peg$FAILED) {
              s4 = peg$parseMathGroup();
            }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c54(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parsenonMathCommandName() {
    var s0, s1, s2;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c65) {
      s1 = peg$c65;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c66); }
    }
    if (s1 !== peg$FAILED) {
      if (peg$c67.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c68); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 91) {
        s0 = peg$c69;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c70); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 93) {
          s0 = peg$c71;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c72); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s0 = peg$c73;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c74); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s0 = peg$c75;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c76); }
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parseDefCommand() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c77) {
        s2 = peg$c77;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c78); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = peg$currPos;
          s6 = peg$parseescape();
          if (s6 !== peg$FAILED) {
            s7 = [];
            s8 = peg$parsechar();
            if (s8 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 64) {
                s8 = peg$c55;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c56); }
              }
            }
            if (s8 !== peg$FAILED) {
              while (s8 !== peg$FAILED) {
                s7.push(s8);
                s8 = peg$parsechar();
                if (s8 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 64) {
                    s8 = peg$c55;
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c56); }
                  }
                }
              }
            } else {
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parseargumentList();
            if (s6 === peg$FAILED) {
              s6 = peg$parseCommandParameterWithNumber();
            }
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseargumentList();
              if (s6 === peg$FAILED) {
                s6 = peg$parseCommandParameterWithNumber();
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseskip_space();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseGroup();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c79(s4, s5, s7);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseGroup() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsebeginGroup();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$parseendGroup();
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            s7 = peg$parseElement();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s5;
              s6 = peg$c80(s7);
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$currPos;
            peg$silentFails++;
            s7 = peg$parseendGroup();
            peg$silentFails--;
            if (s7 === peg$FAILED) {
              s6 = void 0;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseElement();
              if (s7 !== peg$FAILED) {
                peg$savedPos = s5;
                s6 = peg$c80(s7);
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseendGroup();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c81(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseMathGroup() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsebeginGroup();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$parseendGroup();
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            s7 = peg$parseMathElement();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s5;
              s6 = peg$c80(s7);
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$currPos;
            peg$silentFails++;
            s7 = peg$parseendGroup();
            peg$silentFails--;
            if (s7 === peg$FAILED) {
              s6 = void 0;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseMathElement();
              if (s7 !== peg$FAILED) {
                peg$savedPos = s5;
                s6 = peg$c80(s7);
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseendGroup();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c81(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLabelGroup() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsebeginGroup();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseLabelText();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseendGroup();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c82(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLabelText() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$currPos;
    s4 = peg$currPos;
    peg$silentFails++;
    s5 = peg$parseendGroup();
    peg$silentFails--;
    if (s5 === peg$FAILED) {
      s4 = void 0;
    } else {
      peg$currPos = s4;
      s4 = peg$FAILED;
    }
    if (s4 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s5 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c4); }
      }
      if (s5 !== peg$FAILED) {
        s4 = [s4, s5];
        s3 = s4;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    while (s3 !== peg$FAILED) {
      s2.push(s3);
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parseendGroup();
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c83(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseMatchingDelimiters() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseescape();
      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c84) {
          s3 = peg$c84;
          peg$currPos += 4;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c85); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            s6 = peg$parsemathDelimiter();
            if (s6 !== peg$FAILED) {
              s5 = input.substring(s5, peg$currPos);
            } else {
              s5 = s6;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseskip_space();
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$currPos;
                s9 = peg$currPos;
                peg$silentFails++;
                s10 = peg$currPos;
                s11 = peg$parseescape();
                if (s11 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 5) === peg$c86) {
                    s12 = peg$c86;
                    peg$currPos += 5;
                  } else {
                    s12 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c87); }
                  }
                  if (s12 !== peg$FAILED) {
                    s13 = peg$parsemathDelimiter();
                    if (s13 !== peg$FAILED) {
                      s11 = [s11, s12, s13];
                      s10 = s11;
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s10;
                  s10 = peg$FAILED;
                }
                peg$silentFails--;
                if (s10 === peg$FAILED) {
                  s9 = void 0;
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
                if (s9 !== peg$FAILED) {
                  s10 = peg$parseMathElement();
                  if (s10 !== peg$FAILED) {
                    peg$savedPos = s8;
                    s9 = peg$c88(s5, s10);
                    s8 = s9;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$currPos;
                  s9 = peg$currPos;
                  peg$silentFails++;
                  s10 = peg$currPos;
                  s11 = peg$parseescape();
                  if (s11 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 5) === peg$c86) {
                      s12 = peg$c86;
                      peg$currPos += 5;
                    } else {
                      s12 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c87); }
                    }
                    if (s12 !== peg$FAILED) {
                      s13 = peg$parsemathDelimiter();
                      if (s13 !== peg$FAILED) {
                        s11 = [s11, s12, s13];
                        s10 = s11;
                      } else {
                        peg$currPos = s10;
                        s10 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                  peg$silentFails--;
                  if (s10 === peg$FAILED) {
                    s9 = void 0;
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parseMathElement();
                    if (s10 !== peg$FAILED) {
                      peg$savedPos = s8;
                      s9 = peg$c88(s5, s10);
                      s8 = s9;
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseescape();
                  if (s8 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 5) === peg$c86) {
                      s9 = peg$c86;
                      peg$currPos += 5;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c87); }
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parseskip_space();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$currPos;
                        s12 = peg$parsemathDelimiter();
                        if (s12 !== peg$FAILED) {
                          s11 = input.substring(s11, peg$currPos);
                        } else {
                          s11 = s12;
                        }
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c89(s5, s7, s11);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsemathDelimiter() {
    var s0, s1, s2, s3;
    if (peg$c90.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c91); }
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseescape();
      if (s1 !== peg$FAILED) {
        if (peg$c92.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c93); }
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseescape();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsechar();
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsechar();
            }
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s1 = [s1, s2];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }
    return s0;
  }
  function peg$parseMathematicalDelimiters() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = peg$parsesizeCommand();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s4 = peg$c73;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c74); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseskip_space();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$currPos;
              s8 = peg$currPos;
              peg$silentFails++;
              s9 = peg$currPos;
              s10 = peg$parsesizeCommand();
              if (s10 === peg$FAILED) {
                s10 = null;
              }
              if (s10 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 41) {
                  s11 = peg$c75;
                  peg$currPos++;
                } else {
                  s11 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c76); }
                }
                if (s11 !== peg$FAILED) {
                  s10 = [s10, s11];
                  s9 = s10;
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
              } else {
                peg$currPos = s9;
                s9 = peg$FAILED;
              }
              peg$silentFails--;
              if (s9 === peg$FAILED) {
                s8 = void 0;
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
              if (s8 !== peg$FAILED) {
                s9 = peg$parseMathElement();
                if (s9 !== peg$FAILED) {
                  peg$savedPos = s7;
                  s8 = peg$c94(s2, s9);
                  s7 = s8;
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$currPos;
                s8 = peg$currPos;
                peg$silentFails++;
                s9 = peg$currPos;
                s10 = peg$parsesizeCommand();
                if (s10 === peg$FAILED) {
                  s10 = null;
                }
                if (s10 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s11 = peg$c75;
                    peg$currPos++;
                  } else {
                    s11 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c76); }
                  }
                  if (s11 !== peg$FAILED) {
                    s10 = [s10, s11];
                    s9 = s10;
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
                peg$silentFails--;
                if (s9 === peg$FAILED) {
                  s8 = void 0;
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
                if (s8 !== peg$FAILED) {
                  s9 = peg$parseMathElement();
                  if (s9 !== peg$FAILED) {
                    peg$savedPos = s7;
                    s8 = peg$c94(s2, s9);
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;
                s8 = peg$parsesizeCommand();
                if (s8 === peg$FAILED) {
                  s8 = null;
                }
                if (s8 !== peg$FAILED) {
                  s7 = input.substring(s7, peg$currPos);
                } else {
                  s7 = s8;
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseskip_space();
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 41) {
                      s9 = peg$c75;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c76); }
                    }
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c95(s2, s6, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseskip_space();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parsesizeCommand();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseskip_space();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 91) {
              s4 = peg$c69;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c70); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseskip_space();
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$currPos;
                s8 = peg$currPos;
                peg$silentFails++;
                s9 = peg$currPos;
                s10 = peg$parsesizeCommand();
                if (s10 === peg$FAILED) {
                  s10 = null;
                }
                if (s10 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 93) {
                    s11 = peg$c71;
                    peg$currPos++;
                  } else {
                    s11 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c72); }
                  }
                  if (s11 !== peg$FAILED) {
                    s10 = [s10, s11];
                    s9 = s10;
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
                peg$silentFails--;
                if (s9 === peg$FAILED) {
                  s8 = void 0;
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
                if (s8 !== peg$FAILED) {
                  s9 = peg$parseMathElement();
                  if (s9 !== peg$FAILED) {
                    peg$savedPos = s7;
                    s8 = peg$c94(s2, s9);
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$currPos;
                  s8 = peg$currPos;
                  peg$silentFails++;
                  s9 = peg$currPos;
                  s10 = peg$parsesizeCommand();
                  if (s10 === peg$FAILED) {
                    s10 = null;
                  }
                  if (s10 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 93) {
                      s11 = peg$c71;
                      peg$currPos++;
                    } else {
                      s11 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c72); }
                    }
                    if (s11 !== peg$FAILED) {
                      s10 = [s10, s11];
                      s9 = s10;
                    } else {
                      peg$currPos = s9;
                      s9 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                  peg$silentFails--;
                  if (s9 === peg$FAILED) {
                    s8 = void 0;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseMathElement();
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s7;
                      s8 = peg$c94(s2, s9);
                      s7 = s8;
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$currPos;
                  s8 = peg$parsesizeCommand();
                  if (s8 === peg$FAILED) {
                    s8 = null;
                  }
                  if (s8 !== peg$FAILED) {
                    s7 = input.substring(s7, peg$currPos);
                  } else {
                    s7 = s8;
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseskip_space();
                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s9 = peg$c71;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c72); }
                      }
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c96(s2, s6, s7);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseskip_space();
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$parsesizeCommand();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s2 = input.substring(s2, peg$currPos);
          } else {
            s2 = s3;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseskip_space();
            if (s3 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c97) {
                s4 = peg$c97;
                peg$currPos += 2;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c98); }
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parseskip_space();
                if (s5 !== peg$FAILED) {
                  s6 = [];
                  s7 = peg$currPos;
                  s8 = peg$currPos;
                  peg$silentFails++;
                  s9 = peg$currPos;
                  s10 = peg$parsesizeCommand();
                  if (s10 === peg$FAILED) {
                    s10 = null;
                  }
                  if (s10 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 2) === peg$c99) {
                      s11 = peg$c99;
                      peg$currPos += 2;
                    } else {
                      s11 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c100); }
                    }
                    if (s11 !== peg$FAILED) {
                      s10 = [s10, s11];
                      s9 = s10;
                    } else {
                      peg$currPos = s9;
                      s9 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                  peg$silentFails--;
                  if (s9 === peg$FAILED) {
                    s8 = void 0;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseMathElement();
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s7;
                      s8 = peg$c94(s2, s9);
                      s7 = s8;
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                  while (s7 !== peg$FAILED) {
                    s6.push(s7);
                    s7 = peg$currPos;
                    s8 = peg$currPos;
                    peg$silentFails++;
                    s9 = peg$currPos;
                    s10 = peg$parsesizeCommand();
                    if (s10 === peg$FAILED) {
                      s10 = null;
                    }
                    if (s10 !== peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c99) {
                        s11 = peg$c99;
                        peg$currPos += 2;
                      } else {
                        s11 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c100); }
                      }
                      if (s11 !== peg$FAILED) {
                        s10 = [s10, s11];
                        s9 = s10;
                      } else {
                        peg$currPos = s9;
                        s9 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s9;
                      s9 = peg$FAILED;
                    }
                    peg$silentFails--;
                    if (s9 === peg$FAILED) {
                      s8 = void 0;
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseMathElement();
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s7;
                        s8 = peg$c94(s2, s9);
                        s7 = s8;
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$currPos;
                    s8 = peg$parsesizeCommand();
                    if (s8 === peg$FAILED) {
                      s8 = null;
                    }
                    if (s8 !== peg$FAILED) {
                      s7 = input.substring(s7, peg$currPos);
                    } else {
                      s7 = s8;
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parseskip_space();
                      if (s8 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 2) === peg$c99) {
                          s9 = peg$c99;
                          peg$currPos += 2;
                        } else {
                          s9 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c100); }
                        }
                        if (s9 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c101(s2, s6, s7);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }
    return s0;
  }
  function peg$parsesizeCommand() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c102) {
        s2 = peg$c102;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c103); }
      }
      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c104) {
          s2 = peg$c104;
          peg$currPos += 4;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c105); }
        }
        if (s2 === peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c106) {
            s2 = peg$c106;
            peg$currPos += 3;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c107); }
          }
          if (s2 === peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c108) {
              s2 = peg$c108;
              peg$currPos += 3;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c109); }
            }
          }
        }
      }
      if (s2 !== peg$FAILED) {
        if (peg$c110.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c111); }
        }
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseargumentList() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 91) {
        s2 = peg$c69;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c70); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 93) {
          s6 = peg$c71;
          peg$currPos++;
        } else {
          s6 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c72); }
        }
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = void 0;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseskip_space();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseargsDelimiter();
            if (s7 === peg$FAILED) {
              s7 = peg$parseargsToken();
            }
            if (s7 !== peg$FAILED) {
              s8 = peg$parseskip_space();
              if (s8 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c51(s7);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          s5 = peg$currPos;
          peg$silentFails++;
          if (input.charCodeAt(peg$currPos) === 93) {
            s6 = peg$c71;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c72); }
          }
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = void 0;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseskip_space();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseargsDelimiter();
              if (s7 === peg$FAILED) {
                s7 = peg$parseargsToken();
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parseskip_space();
                if (s8 !== peg$FAILED) {
                  peg$savedPos = s4;
                  s5 = peg$c51(s7);
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 93) {
            s4 = peg$c71;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c72); }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c112(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseargsToken() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$parseSpecialCommand();
    if (s0 === peg$FAILED) {
      s0 = peg$parseCommand();
      if (s0 === peg$FAILED) {
        s0 = peg$parseGroup();
        if (s0 === peg$FAILED) {
          s0 = peg$parseInlineMathShift();
          if (s0 === peg$FAILED) {
            s0 = peg$parseAlignmentTab();
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = [];
              s2 = peg$parsesp();
              while (s2 !== peg$FAILED) {
                s1.push(s2);
                s2 = peg$parsesp();
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parsenl();
                if (s2 !== peg$FAILED) {
                  s3 = [];
                  s4 = peg$parsesp();
                  while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parsesp();
                  }
                  if (s3 !== peg$FAILED) {
                    s4 = [];
                    s5 = peg$parsenl();
                    if (s5 !== peg$FAILED) {
                      while (s5 !== peg$FAILED) {
                        s4.push(s5);
                        s5 = peg$parsenl();
                      }
                    } else {
                      s4 = peg$FAILED;
                    }
                    if (s4 !== peg$FAILED) {
                      s5 = [];
                      s6 = peg$parsesp();
                      while (s6 !== peg$FAILED) {
                        s5.push(s6);
                        s6 = peg$parsesp();
                      }
                      if (s5 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c113();
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$parseCommandParameterWithNumber();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseSuperscript();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseSubscript();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseignore();
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        s1 = peg$currPos;
                        s2 = [];
                        s3 = peg$currPos;
                        s4 = peg$currPos;
                        peg$silentFails++;
                        s5 = peg$parsenoncharToken();
                        if (s5 === peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 44) {
                            s5 = peg$c114;
                            peg$currPos++;
                          } else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c115); }
                          }
                          if (s5 === peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 93) {
                              s5 = peg$c71;
                              peg$currPos++;
                            } else {
                              s5 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c72); }
                            }
                          }
                        }
                        peg$silentFails--;
                        if (s5 === peg$FAILED) {
                          s4 = void 0;
                        } else {
                          peg$currPos = s4;
                          s4 = peg$FAILED;
                        }
                        if (s4 !== peg$FAILED) {
                          if (input.length > peg$currPos) {
                            s5 = input.charAt(peg$currPos);
                            peg$currPos++;
                          } else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c4); }
                          }
                          if (s5 !== peg$FAILED) {
                            s4 = [s4, s5];
                            s3 = s4;
                          } else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }
                        if (s3 !== peg$FAILED) {
                          while (s3 !== peg$FAILED) {
                            s2.push(s3);
                            s3 = peg$currPos;
                            s4 = peg$currPos;
                            peg$silentFails++;
                            s5 = peg$parsenoncharToken();
                            if (s5 === peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 44) {
                                s5 = peg$c114;
                                peg$currPos++;
                              } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c115); }
                              }
                              if (s5 === peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 93) {
                                  s5 = peg$c71;
                                  peg$currPos++;
                                } else {
                                  s5 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c72); }
                                }
                              }
                            }
                            peg$silentFails--;
                            if (s5 === peg$FAILED) {
                              s4 = void 0;
                            } else {
                              peg$currPos = s4;
                              s4 = peg$FAILED;
                            }
                            if (s4 !== peg$FAILED) {
                              if (input.length > peg$currPos) {
                                s5 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c4); }
                              }
                              if (s5 !== peg$FAILED) {
                                s4 = [s4, s5];
                                s3 = s4;
                              } else {
                                peg$currPos = s3;
                                s3 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s3;
                              s3 = peg$FAILED;
                            }
                          }
                        } else {
                          s2 = peg$FAILED;
                        }
                        if (s2 !== peg$FAILED) {
                          s1 = input.substring(s1, peg$currPos);
                        } else {
                          s1 = s2;
                        }
                        if (s1 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c116(s1);
                        }
                        s0 = s1;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parseargsDelimiter() {
    var s0, s1;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 44) {
      s1 = peg$c114;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c115); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c117();
    }
    s0 = s1;
    return s0;
  }
  function peg$parseEnvironment() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;
    s0 = peg$currPos;
    s1 = peg$parsebeginEnv();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsegroupedEnvname();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseargumentList();
        if (s4 === peg$FAILED) {
          s4 = peg$parseGroup();
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseargumentList();
          if (s4 === peg$FAILED) {
            s4 = peg$parseGroup();
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$currPos;
            s7 = peg$currPos;
            peg$silentFails++;
            s8 = peg$currPos;
            s9 = peg$parseendEnv();
            if (s9 !== peg$FAILED) {
              s10 = peg$parsegroupedEnvname();
              if (s10 !== peg$FAILED) {
                peg$savedPos = peg$currPos;
                s11 = peg$c118(s2, s3, s10);
                if (s11) {
                  s11 = void 0;
                } else {
                  s11 = peg$FAILED;
                }
                if (s11 !== peg$FAILED) {
                  s9 = [s9, s10, s11];
                  s8 = s9;
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
            peg$silentFails--;
            if (s8 === peg$FAILED) {
              s7 = void 0;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              s8 = peg$parseElement();
              if (s8 !== peg$FAILED) {
                peg$savedPos = s6;
                s7 = peg$c119(s2, s3, s8);
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$currPos;
              s7 = peg$currPos;
              peg$silentFails++;
              s8 = peg$currPos;
              s9 = peg$parseendEnv();
              if (s9 !== peg$FAILED) {
                s10 = peg$parsegroupedEnvname();
                if (s10 !== peg$FAILED) {
                  peg$savedPos = peg$currPos;
                  s11 = peg$c118(s2, s3, s10);
                  if (s11) {
                    s11 = void 0;
                  } else {
                    s11 = peg$FAILED;
                  }
                  if (s11 !== peg$FAILED) {
                    s9 = [s9, s10, s11];
                    s8 = s9;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
              peg$silentFails--;
              if (s8 === peg$FAILED) {
                s7 = void 0;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parseElement();
                if (s8 !== peg$FAILED) {
                  peg$savedPos = s6;
                  s7 = peg$c119(s2, s3, s8);
                  s6 = s7;
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseendEnv();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsegroupedEnvname();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c120(s2, s3, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseMathEnvironment() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
    s0 = peg$currPos;
    s1 = peg$parsebeginEnv();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsebeginGroup();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsemathEnvName();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseendGroup();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseskip_space();
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$currPos;
                s9 = peg$currPos;
                peg$silentFails++;
                s10 = peg$currPos;
                s11 = peg$parseendEnv();
                if (s11 !== peg$FAILED) {
                  s12 = peg$parsegroupedEnvname();
                  if (s12 !== peg$FAILED) {
                    peg$savedPos = peg$currPos;
                    s13 = peg$c121(s4, s12);
                    if (s13) {
                      s13 = void 0;
                    } else {
                      s13 = peg$FAILED;
                    }
                    if (s13 !== peg$FAILED) {
                      s11 = [s11, s12, s13];
                      s10 = s11;
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s10;
                  s10 = peg$FAILED;
                }
                peg$silentFails--;
                if (s10 === peg$FAILED) {
                  s9 = void 0;
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
                if (s9 !== peg$FAILED) {
                  s10 = peg$parseMathElement();
                  if (s10 !== peg$FAILED) {
                    peg$savedPos = s8;
                    s9 = peg$c122(s4, s10);
                    s8 = s9;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$currPos;
                  s9 = peg$currPos;
                  peg$silentFails++;
                  s10 = peg$currPos;
                  s11 = peg$parseendEnv();
                  if (s11 !== peg$FAILED) {
                    s12 = peg$parsegroupedEnvname();
                    if (s12 !== peg$FAILED) {
                      peg$savedPos = peg$currPos;
                      s13 = peg$c121(s4, s12);
                      if (s13) {
                        s13 = void 0;
                      } else {
                        s13 = peg$FAILED;
                      }
                      if (s13 !== peg$FAILED) {
                        s11 = [s11, s12, s13];
                        s10 = s11;
                      } else {
                        peg$currPos = s10;
                        s10 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                  peg$silentFails--;
                  if (s10 === peg$FAILED) {
                    s9 = void 0;
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parseMathElement();
                    if (s10 !== peg$FAILED) {
                      peg$savedPos = s8;
                      s9 = peg$c122(s4, s10);
                      s8 = s9;
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseendEnv();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseskip_space();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parsebeginGroup();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parsemathEnvName();
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parseendGroup();
                          if (s12 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c123(s4, s7);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseMathAlignedEnvironment() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
    s0 = peg$currPos;
    s1 = peg$parsebeginEnv();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsebeginGroup();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsemahtAlignedEnvName();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseendGroup();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseskip_space();
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$currPos;
                s9 = peg$currPos;
                peg$silentFails++;
                s10 = peg$currPos;
                s11 = peg$parseendEnv();
                if (s11 !== peg$FAILED) {
                  s12 = peg$parsegroupedEnvname();
                  if (s12 !== peg$FAILED) {
                    peg$savedPos = peg$currPos;
                    s13 = peg$c121(s4, s12);
                    if (s13) {
                      s13 = void 0;
                    } else {
                      s13 = peg$FAILED;
                    }
                    if (s13 !== peg$FAILED) {
                      s11 = [s11, s12, s13];
                      s10 = s11;
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s10;
                  s10 = peg$FAILED;
                }
                peg$silentFails--;
                if (s10 === peg$FAILED) {
                  s9 = void 0;
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
                if (s9 !== peg$FAILED) {
                  s10 = peg$parseMathElement();
                  if (s10 !== peg$FAILED) {
                    peg$savedPos = s8;
                    s9 = peg$c122(s4, s10);
                    s8 = s9;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$currPos;
                  s9 = peg$currPos;
                  peg$silentFails++;
                  s10 = peg$currPos;
                  s11 = peg$parseendEnv();
                  if (s11 !== peg$FAILED) {
                    s12 = peg$parsegroupedEnvname();
                    if (s12 !== peg$FAILED) {
                      peg$savedPos = peg$currPos;
                      s13 = peg$c121(s4, s12);
                      if (s13) {
                        s13 = void 0;
                      } else {
                        s13 = peg$FAILED;
                      }
                      if (s13 !== peg$FAILED) {
                        s11 = [s11, s12, s13];
                        s10 = s11;
                      } else {
                        peg$currPos = s10;
                        s10 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                  peg$silentFails--;
                  if (s10 === peg$FAILED) {
                    s9 = void 0;
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parseMathElement();
                    if (s10 !== peg$FAILED) {
                      peg$savedPos = s8;
                      s9 = peg$c122(s4, s10);
                      s8 = s9;
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseendEnv();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseskip_space();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parsebeginGroup();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parsemahtAlignedEnvName();
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parseendGroup();
                          if (s12 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c124(s4, s7);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsegroupedEnvname() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsebeginGroup();
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = peg$currPos;
        s5 = [];
        s6 = peg$parsechar();
        if (s6 !== peg$FAILED) {
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parsechar();
          }
        } else {
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 42) {
            s6 = peg$c57;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c58); }
          }
          if (s6 === peg$FAILED) {
            s6 = null;
          }
          if (s6 !== peg$FAILED) {
            s5 = [s5, s6];
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseendGroup();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c125(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseAmsmathTextCommand() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c126) {
        s2 = peg$c126;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c127); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseGroup();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c128(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsebeginDisplayMath() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 91) {
        s2 = peg$c69;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c70); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseendDisplayMath() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 93) {
        s2 = peg$c71;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c72); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsebeginInlineMath() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 40) {
        s2 = peg$c73;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c74); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseendInlineMath() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 41) {
        s2 = peg$c75;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c76); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsebeginEnv() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 5) === peg$c130) {
        s2 = peg$c130;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c131); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseendEnv() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c65) {
        s2 = peg$c65;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c66); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsemathEnvName() {
    var s0;
    if (input.substr(peg$currPos, 9) === peg$c132) {
      s0 = peg$c132;
      peg$currPos += 9;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c133); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 8) === peg$c134) {
        s0 = peg$c134;
        peg$currPos += 8;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c135); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 6) === peg$c136) {
          s0 = peg$c136;
          peg$currPos += 6;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c137); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 5) === peg$c138) {
            s0 = peg$c138;
            peg$currPos += 5;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c139); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 8) === peg$c140) {
              s0 = peg$c140;
              peg$currPos += 8;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c141); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 7) === peg$c142) {
                s0 = peg$c142;
                peg$currPos += 7;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c143); }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 7) === peg$c144) {
                  s0 = peg$c144;
                  peg$currPos += 7;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c145); }
                }
                if (s0 === peg$FAILED) {
                  if (input.substr(peg$currPos, 6) === peg$c146) {
                    s0 = peg$c146;
                    peg$currPos += 6;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c147); }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.substr(peg$currPos, 9) === peg$c148) {
                      s0 = peg$c148;
                      peg$currPos += 9;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c149); }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.substr(peg$currPos, 8) === peg$c150) {
                        s0 = peg$c150;
                        peg$currPos += 8;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c151); }
                      }
                      if (s0 === peg$FAILED) {
                        if (input.substr(peg$currPos, 8) === peg$c152) {
                          s0 = peg$c152;
                          peg$currPos += 8;
                        } else {
                          s0 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c153); }
                        }
                        if (s0 === peg$FAILED) {
                          if (input.substr(peg$currPos, 7) === peg$c154) {
                            s0 = peg$c154;
                            peg$currPos += 7;
                          } else {
                            s0 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c155); }
                          }
                          if (s0 === peg$FAILED) {
                            if (input.substr(peg$currPos, 4) === peg$c156) {
                              s0 = peg$c156;
                              peg$currPos += 4;
                            } else {
                              s0 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c157); }
                            }
                            if (s0 === peg$FAILED) {
                              if (input.substr(peg$currPos, 11) === peg$c158) {
                                s0 = peg$c158;
                                peg$currPos += 11;
                              } else {
                                s0 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c159); }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parsemahtAlignedEnvName() {
    var s0;
    if (input.substr(peg$currPos, 7) === peg$c160) {
      s0 = peg$c160;
      peg$currPos += 7;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c161); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 9) === peg$c162) {
        s0 = peg$c162;
        peg$currPos += 9;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c163); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 5) === peg$c164) {
          s0 = peg$c164;
          peg$currPos += 5;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c165); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 6) === peg$c166) {
            s0 = peg$c166;
            peg$currPos += 6;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c167); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 8) === peg$c168) {
              s0 = peg$c168;
              peg$currPos += 8;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c169); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 5) === peg$c170) {
                s0 = peg$c170;
                peg$currPos += 5;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c171); }
              }
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parseescape() {
    var s0;
    if (input.charCodeAt(peg$currPos) === 92) {
      s0 = peg$c172;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c173); }
    }
    return s0;
  }
  function peg$parsebeginGroup() {
    var s0;
    if (input.charCodeAt(peg$currPos) === 123) {
      s0 = peg$c174;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c175); }
    }
    return s0;
  }
  function peg$parseendGroup() {
    var s0;
    if (input.charCodeAt(peg$currPos) === 125) {
      s0 = peg$c176;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c177); }
    }
    return s0;
  }
  function peg$parsemathShift() {
    var s0;
    if (input.charCodeAt(peg$currPos) === 36) {
      s0 = peg$c178;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c179); }
    }
    return s0;
  }
  function peg$parseAlignmentTab() {
    var s0, s1;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 38) {
      s1 = peg$c180;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c181); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c182();
    }
    s0 = s1;
    return s0;
  }
  function peg$parsecommandParameter() {
    var s0;
    if (input.charCodeAt(peg$currPos) === 35) {
      s0 = peg$c183;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c184); }
    }
    return s0;
  }
  function peg$parseSuperscript() {
    var s0, s1;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 94) {
      s1 = peg$c185;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c186); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c187();
    }
    s0 = s1;
    return s0;
  }
  function peg$parseSubscript() {
    var s0, s1;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 95) {
      s1 = peg$c188;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c189); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c190();
    }
    s0 = s1;
    return s0;
  }
  function peg$parseignore() {
    var s0, s1;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 0) {
      s1 = peg$c191;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c192); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c193();
    }
    s0 = s1;
    return s0;
  }
  function peg$parsechar() {
    var s0;
    if (peg$c194.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c195); }
    }
    return s0;
  }
  function peg$parsenum() {
    var s0;
    if (peg$c196.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c197); }
    }
    return s0;
  }
  function peg$parseActiveCharacter() {
    var s0, s1;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 126) {
      s1 = peg$c200;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c201); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c202();
    }
    s0 = s1;
    return s0;
  }
  function peg$parseCommandParameterWithNumber() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parsecommandParameter();
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = peg$parsenum();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parsenum();
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c203(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseendDoc() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseendEnv();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsebeginGroup();
        if (s3 !== peg$FAILED) {
          if (input.substr(peg$currPos, 8) === peg$c204) {
            s4 = peg$c204;
            peg$currPos += 8;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c205); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseendGroup();
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsecomment() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 37) {
      s1 = peg$c12;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c13); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = peg$currPos;
      s5 = peg$currPos;
      peg$silentFails++;
      s6 = peg$parsenl();
      peg$silentFails--;
      if (s6 === peg$FAILED) {
        s5 = void 0;
      } else {
        peg$currPos = s5;
        s5 = peg$FAILED;
      }
      if (s5 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s6 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s6 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s6 !== peg$FAILED) {
          s5 = [s5, s6];
          s4 = s5;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$currPos;
        s5 = peg$currPos;
        peg$silentFails++;
        s6 = peg$parsenl();
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = void 0;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
          if (s6 !== peg$FAILED) {
            s5 = [s5, s6];
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenl();
        if (s3 === peg$FAILED) {
          s3 = peg$parseEOF();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c206(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsewhitespace() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parsenl();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsesp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsesp();
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsesp();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsesp();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsenl();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsesp();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsesp();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            peg$silentFails++;
            s5 = peg$parsenl();
            peg$silentFails--;
            if (s5 === peg$FAILED) {
              s4 = void 0;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = [];
        s1 = peg$parsesp();
        if (s1 !== peg$FAILED) {
          while (s1 !== peg$FAILED) {
            s0.push(s1);
            s1 = peg$parsesp();
          }
        } else {
          s0 = peg$FAILED;
        }
      }
    }
    return s0;
  }
  function peg$parsenl() {
    var s0;
    if (input.charCodeAt(peg$currPos) === 10) {
      s0 = peg$c207;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c208); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c209) {
        s0 = peg$c209;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c210); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 13) {
          s0 = peg$c211;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c212); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 8232) {
            s0 = peg$c213;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c214); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 8233) {
              s0 = peg$c215;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c216); }
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parsesp() {
    var s0;
    if (peg$c217.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c218); }
    }
    return s0;
  }
  function peg$parseskip_space() {
    var s0, s1, s2, s3;
    peg$silentFails++;
    s0 = [];
    s1 = peg$currPos;
    s2 = peg$currPos;
    peg$silentFails++;
    s3 = peg$parsebreak();
    peg$silentFails--;
    if (s3 === peg$FAILED) {
      s2 = void 0;
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsenl();
      if (s3 === peg$FAILED) {
        s3 = peg$parsesp();
        if (s3 === peg$FAILED) {
          s3 = peg$parseskip_comment();
        }
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$currPos;
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsebreak();
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenl();
        if (s3 === peg$FAILED) {
          s3 = peg$parsesp();
          if (s3 === peg$FAILED) {
            s3 = peg$parseskip_comment();
          }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c219); }
    }
    return s0;
  }
  function peg$parseskip_comment() {
    var s0, s1;
    s0 = peg$currPos;
    s1 = peg$parsecomment();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c220(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseskip_all_space() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsenl();
    if (s2 === peg$FAILED) {
      s2 = peg$parsesp();
      if (s2 === peg$FAILED) {
        s2 = peg$parseskip_comment();
      }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsenl();
      if (s2 === peg$FAILED) {
        s2 = peg$parsesp();
        if (s2 === peg$FAILED) {
          s2 = peg$parseskip_comment();
        }
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c221();
    }
    s0 = s1;
    return s0;
  }
  function peg$parsebreak() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$parseskip_all_space();
    if (s3 !== peg$FAILED) {
      s4 = peg$parseescape();
      if (s4 !== peg$FAILED) {
        if (input.substr(peg$currPos, 3) === peg$c222) {
          s5 = peg$c222;
          peg$currPos += 3;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c223); }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$parsechar();
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            s7 = peg$parseskip_all_space();
            if (s7 !== peg$FAILED) {
              s3 = [s3, s4, s5, s6, s7];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseskip_all_space();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseescape();
          if (s4 !== peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c222) {
              s5 = peg$c222;
              peg$currPos += 3;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c223); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              peg$silentFails++;
              s7 = peg$parsechar();
              peg$silentFails--;
              if (s7 === peg$FAILED) {
                s6 = void 0;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseskip_all_space();
                if (s7 !== peg$FAILED) {
                  s3 = [s3, s4, s5, s6, s7];
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c224();
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsesp();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsesp();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parsenl();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseskip_comment();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseskip_comment();
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = [];
          s3 = peg$parseskip_comment();
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parseskip_comment();
            }
          } else {
            s2 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$parsesp();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parsesp();
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parsenl();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$currPos;
              s5 = [];
              s6 = peg$parsesp();
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parsesp();
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parsenl();
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            }
          } else {
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$parseendDoc();
            peg$silentFails--;
            if (s4 !== peg$FAILED) {
              peg$currPos = s3;
              s3 = void 0;
            } else {
              s3 = peg$FAILED;
            }
            if (s3 === peg$FAILED) {
              s3 = peg$parseEOF();
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsesp();
            if (s5 === peg$FAILED) {
              s5 = peg$parsenl();
              if (s5 === peg$FAILED) {
                s5 = peg$parseskip_comment();
              }
            }
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsesp();
              if (s5 === peg$FAILED) {
                s5 = peg$parsenl();
                if (s5 === peg$FAILED) {
                  s5 = peg$parseskip_comment();
                }
              }
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c224();
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseEOF() {
    var s0, s1;
    s0 = peg$currPos;
    peg$silentFails++;
    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    peg$silentFails--;
    if (s1 === peg$FAILED) {
      s0 = void 0;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
    const timeKeeper = options.timeout;
    const commentMap = options.enableComment ? new Map() : undefined;
  peg$result = peg$startRuleFunction();
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }
    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}
var latex_parser_simple = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};

function peg$subclass$1(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}
function peg$SyntaxError$1(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError$1);
  }
}
peg$subclass$1(peg$SyntaxError$1, Error);
peg$SyntaxError$1.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },
        "class": function(expectation) {
          var escapedParts = "",
              i;
          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }
          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },
        any: function(expectation) {
          return "any character";
        },
        end: function(expectation) {
          return "end of input";
        },
        other: function(expectation) {
          return expectation.description;
        }
      };
  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }
  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }
  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }
  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }
  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;
    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }
    descriptions.sort();
    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }
    switch (descriptions.length) {
      case 1:
        return descriptions[0];
      case 2:
        return descriptions[0] + " or " + descriptions[1];
      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }
  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }
  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};
function peg$DefaultTracer() {
  this.indentLevel = 0;
}
peg$DefaultTracer.prototype.trace = function(event) {
  var that = this;
  function log(event) {
    function repeat(string, n) {
       var result = "", i;
       for (i = 0; i < n; i++) {
         result += string;
       }
       return result;
    }
    function pad(string, length) {
      return string + repeat(" ", length - string.length);
    }
    if (typeof console === "object") {
      console.log(
        event.location.start.line + ":" + event.location.start.column + "-"
          + event.location.end.line + ":" + event.location.end.column + " "
          + pad(event.type, 10) + " "
          + repeat("  ", that.indentLevel) + event.rule
      );
    }
  }
  switch (event.type) {
    case "rule.enter":
      log(event);
      this.indentLevel++;
      break;
    case "rule.match":
      this.indentLevel--;
      log(event);
      break;
    case "rule.fail":
      this.indentLevel--;
      log(event);
      break;
    default:
      throw new Error("Invalid event type: " + event.type + ".");
  }
};
function peg$parse$1(input, options) {
  options = options !== void 0 ? options : {};
  var peg$FAILED = {},
      peg$startRuleFunctions = { Root: peg$parseRoot, Preamble: peg$parsePreamble },
      peg$startRuleFunction  = peg$parseRoot,
      peg$c0 = function(x) {
          const comment = commentMap ? Array.from(commentMap.values()) : undefined;
          return { kind: "ast.root", content: x, comment };
        },
      peg$c1 = "begin{document}",
      peg$c2 = peg$literalExpectation("begin{document}", false),
      peg$c3 = function(e) { return e; },
      peg$c4 = peg$anyExpectation(),
      peg$c5 = function(x, rest) {
          const comment = commentMap ? Array.from(commentMap.values()) : undefined;
          return { kind: "ast.preamble", content: x, rest, comment };
        },
      peg$c6 = function(x) {
          return x;
        },
      peg$c7 = function() { return { kind: "parbreak", location: location() }; },
      peg$c8 = function(c) {
          timeKeeper && timeKeeper.check();
          return { kind: "text.string", content: c, location: location() };
        },
      peg$c9 = function(x) { return { kind: "superscript", arg: x, location: location() }; },
      peg$c10 = function(x) { return { kind: "subscript", arg: x, location: location() }; },
      peg$c11 = function(c) { return { kind: "math.character", content: c }; },
      peg$c12 = "%",
      peg$c13 = peg$literalExpectation("%", false),
      peg$c16 = peg$otherExpectation("special command"),
      peg$c17 = "verb*",
      peg$c18 = peg$literalExpectation("verb*", false),
      peg$c19 = "verb",
      peg$c20 = peg$literalExpectation("verb", false),
      peg$c21 = function(name, e, end) {return end === e;},
      peg$c22 = function(name, e, x, end) {return end === e;},
      peg$c23 = function(name, e, x) {
          return { kind: "verb", name, escape: e, content: x, location: location() };
        },
      peg$c24 = "begin{verbatim}",
      peg$c25 = peg$literalExpectation("begin{verbatim}", false),
      peg$c26 = "end{verbatim}",
      peg$c27 = peg$literalExpectation("end{verbatim}", false),
      peg$c28 = function(x) {
          return { kind: "env.verbatim", name: "verbatim", content: x, location: location() };
        },
      peg$c29 = "begin{verbatim*}",
      peg$c30 = peg$literalExpectation("begin{verbatim*}", false),
      peg$c31 = "end{verbatim*}",
      peg$c32 = peg$literalExpectation("end{verbatim*}", false),
      peg$c33 = function(x) {
          return { kind: "env.verbatim", name: "verbatim*", content: x, location: location() };
        },
      peg$c34 = "begin{minted}",
      peg$c35 = peg$literalExpectation("begin{minted}", false),
      peg$c36 = "end{minted}",
      peg$c37 = peg$literalExpectation("end{minted}", false),
      peg$c38 = function(args, x) {
          return { kind: "env.minted", name: "minted", args: args, content: x, location: location() };
        },
      peg$c39 = "begin{lstlisting}",
      peg$c40 = peg$literalExpectation("begin{lstlisting}", false),
      peg$c41 = "end{lstlisting}",
      peg$c42 = peg$literalExpectation("end{lstlisting}", false),
      peg$c43 = function(arg, x) {
          return { kind: "env.lstlisting", name: "lstlisting", arg: arg, content: x, location: location() };
        },
      peg$c44 = "begin{comment}",
      peg$c45 = peg$literalExpectation("begin{comment}", false),
      peg$c46 = "end{comment}",
      peg$c47 = peg$literalExpectation("end{comment}", false),
      peg$c48 = function(x) {
          return { kind: "env.comment", content: x, location: location() };
        },
      peg$c49 = function(t) {return t;},
      peg$c50 = function(eq) {
          return { kind: "inlineMath", content: eq, location: location() };
        },
      peg$c51 = function(x) {return x;},
      peg$c52 = function(x) {
          return { kind: "inlineMath", content: x, location: location() };
        },
      peg$c53 = function(x) {
          return { kind: "displayMath", content: x, location: location() };
        },
      peg$c54 = function(n, args) {
          return { kind: "command", name: n, args: args, location: location() };
        },
      peg$c55 = "@",
      peg$c56 = peg$literalExpectation("@", false),
      peg$c57 = "*",
      peg$c58 = peg$literalExpectation("*", false),
      peg$c59 = function(n) { return n + '*'; },
      peg$c60 = "\\*",
      peg$c61 = peg$literalExpectation("\\*", false),
      peg$c62 = "label",
      peg$c63 = peg$literalExpectation("label", false),
      peg$c64 = function(x) {
          return { kind: "command", name: "label", args: [x], location: location() };
        },
      peg$c65 = "end",
      peg$c66 = peg$literalExpectation("end", false),
      peg$c67 = /^[^a-zA-Z]/,
      peg$c68 = peg$classExpectation([["a", "z"], ["A", "Z"]], true, false),
      peg$c69 = "[",
      peg$c70 = peg$literalExpectation("[", false),
      peg$c71 = "]",
      peg$c72 = peg$literalExpectation("]", false),
      peg$c73 = "(",
      peg$c74 = peg$literalExpectation("(", false),
      peg$c75 = ")",
      peg$c76 = peg$literalExpectation(")", false),
      peg$c77 = "def",
      peg$c78 = peg$literalExpectation("def", false),
      peg$c79 = function(token, numArgs, grArg) {
          return { kind: "command.def", token, args: numArgs.concat([grArg]), location: location() };
        },
      peg$c80 = function(c) {return c;},
      peg$c81 = function(x) {
          return { kind: "arg.group", content: x, location: location() };
        },
      peg$c82 = function(x) {
          return { kind: "arg.group", content: [x], location: location() };
        },
      peg$c83 = function(c) {
          return { kind: "text.string", content: c, location: location() };
        },
      peg$c84 = "left",
      peg$c85 = peg$literalExpectation("left", false),
      peg$c86 = "right",
      peg$c87 = peg$literalExpectation("right", false),
      peg$c88 = function(l, c) {return c;},
      peg$c89 = function(l, x, r) {
          return { kind: "math.matching_delimiters", left: l, right: r, content: x, location: location() };
        },
      peg$c90 = /^[()[\]|\/.]/,
      peg$c91 = peg$classExpectation(["(", ")", "[", "]", "|", "/", "."], false, false),
      peg$c92 = /^[{}]/,
      peg$c93 = peg$classExpectation(["{", "}"], false, false),
      peg$c94 = function(l, c) { return c;},
      peg$c95 = function(l, x, r) {
          return { kind: "math.math_delimiters", lcommand: l, rcommand: r, left: "(", right: ")", content: x, location: location() };
        },
      peg$c96 = function(l, x, r) {
          return { kind: "math.math_delimiters", lcommand: l, rcommand: r, left: "[", right: "]", content: x, location: location() };
        },
      peg$c97 = "\\{",
      peg$c98 = peg$literalExpectation("\\{", false),
      peg$c99 = "\\}",
      peg$c100 = peg$literalExpectation("\\}", false),
      peg$c101 = function(l, x, r) {
          return { kind: "math.math_delimiters", lcommand: l, rcommand: r, left: "\\{", right: "\\}", content: x, location: location() };
        },
      peg$c102 = "bigg",
      peg$c103 = peg$literalExpectation("bigg", false),
      peg$c104 = "Bigg",
      peg$c105 = peg$literalExpectation("Bigg", false),
      peg$c106 = "big",
      peg$c107 = peg$literalExpectation("big", false),
      peg$c108 = "Big",
      peg$c109 = peg$literalExpectation("Big", false),
      peg$c110 = /^[rlm]/,
      peg$c111 = peg$classExpectation(["r", "l", "m"], false, false),
      peg$c112 = function(body) {
          return { kind: "arg.optional", content: body, location: location() };
        },
      peg$c113 = function() { return {kind:"parbreak", location: location()}; },
      peg$c114 = ",",
      peg$c115 = peg$literalExpectation(",", false),
      peg$c116 = function(c) { return { kind: "text.string", content: c, location: location() }; },
      peg$c117 = function() {
          return { kind: "text.string", content: ",", location: location() };
        },
      peg$c118 = function(name, args, n) {return name === n;},
      peg$c119 = function(name, args, x) {return x;},
      peg$c120 = function(name, args, body) {
          return { kind: "env", name, args, content: body, location: location() };
        },
      peg$c121 = function(name, n) {return name === n;},
      peg$c122 = function(name, x) {return x;},
      peg$c123 = function(name, body) {
          return { kind: "env.math.align", name, args: [], content: body, location: location() };
        },
      peg$c124 = function(name, body) {
          return { kind: "env.math.aligned", name, args: [], content: body, location: location() };
        },
      peg$c125 = function(x) {
          return x;
        },
      peg$c126 = "text",
      peg$c127 = peg$literalExpectation("text", false),
      peg$c128 = function(arg) {
          return { kind: "command.text", arg: arg, location: location() };
        },
      peg$c130 = "begin",
      peg$c131 = peg$literalExpectation("begin", false),
      peg$c132 = "equation*",
      peg$c133 = peg$literalExpectation("equation*", false),
      peg$c134 = "equation",
      peg$c135 = peg$literalExpectation("equation", false),
      peg$c136 = "align*",
      peg$c137 = peg$literalExpectation("align*", false),
      peg$c138 = "align",
      peg$c139 = peg$literalExpectation("align", false),
      peg$c140 = "alignat*",
      peg$c141 = peg$literalExpectation("alignat*", false),
      peg$c142 = "alignat",
      peg$c143 = peg$literalExpectation("alignat", false),
      peg$c144 = "gather*",
      peg$c145 = peg$literalExpectation("gather*", false),
      peg$c146 = "gather",
      peg$c147 = peg$literalExpectation("gather", false),
      peg$c148 = "multline*",
      peg$c149 = peg$literalExpectation("multline*", false),
      peg$c150 = "multline",
      peg$c151 = peg$literalExpectation("multline", false),
      peg$c152 = "flalign*",
      peg$c153 = peg$literalExpectation("flalign*", false),
      peg$c154 = "flalign",
      peg$c155 = peg$literalExpectation("flalign", false),
      peg$c156 = "math",
      peg$c157 = peg$literalExpectation("math", false),
      peg$c158 = "displaymath",
      peg$c159 = peg$literalExpectation("displaymath", false),
      peg$c160 = "aligned",
      peg$c161 = peg$literalExpectation("aligned", false),
      peg$c162 = "alignedat",
      peg$c163 = peg$literalExpectation("alignedat", false),
      peg$c164 = "cases",
      peg$c165 = peg$literalExpectation("cases", false),
      peg$c166 = "cases*",
      peg$c167 = peg$literalExpectation("cases*", false),
      peg$c168 = "gathered",
      peg$c169 = peg$literalExpectation("gathered", false),
      peg$c170 = "split",
      peg$c171 = peg$literalExpectation("split", false),
      peg$c172 = "\\",
      peg$c173 = peg$literalExpectation("\\", false),
      peg$c174 = "{",
      peg$c175 = peg$literalExpectation("{", false),
      peg$c176 = "}",
      peg$c177 = peg$literalExpectation("}", false),
      peg$c178 = "$",
      peg$c179 = peg$literalExpectation("$", false),
      peg$c180 = "&",
      peg$c181 = peg$literalExpectation("&", false),
      peg$c182 = function() {
          return { kind: "alignmentTab", location: location() };
        },
      peg$c183 = "#",
      peg$c184 = peg$literalExpectation("#", false),
      peg$c185 = "^",
      peg$c186 = peg$literalExpectation("^", false),
      peg$c187 = function() {
          return { kind: "superscript", arg: undefined, location: location() };
        },
      peg$c188 = "_",
      peg$c189 = peg$literalExpectation("_", false),
      peg$c190 = function() {
          return { kind: "subscript", arg: undefined, location: location() };
        },
      peg$c191 = "\0",
      peg$c192 = peg$literalExpectation("\0", false),
      peg$c193 = function() {
          return { kind: "ignore", location: location() };
        },
      peg$c194 = /^[a-zA-Z]/,
      peg$c195 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false),
      peg$c196 = /^[0-9]/,
      peg$c197 = peg$classExpectation([["0", "9"]], false, false),
      peg$c200 = "~",
      peg$c201 = peg$literalExpectation("~", false),
      peg$c202 = function() {
          return { kind: "activeCharacter", location: location() };
        },
      peg$c203 = function(n) {
          return { kind: "commandParameter", nargs: n, location: location() };
        },
      peg$c204 = "document",
      peg$c205 = peg$literalExpectation("document", false),
      peg$c206 = function(c) {
          return c;
        },
      peg$c207 = "\n",
      peg$c208 = peg$literalExpectation("\n", false),
      peg$c209 = "\r\n",
      peg$c210 = peg$literalExpectation("\r\n", false),
      peg$c211 = "\r",
      peg$c212 = peg$literalExpectation("\r", false),
      peg$c213 = "\u2028",
      peg$c214 = peg$literalExpectation("\u2028", false),
      peg$c215 = "\u2029",
      peg$c216 = peg$literalExpectation("\u2029", false),
      peg$c217 = /^[ \t]/,
      peg$c218 = peg$classExpectation([" ", "\t"], false, false),
      peg$c219 = peg$otherExpectation("spaces"),
      peg$c220 = function(c) {
          if (options.enableComment) {
            const loc = location();
            const locJson = JSON.stringify(loc);
            if (!commentMap.has(locJson)) {
              commentMap.set(locJson, { kind: "comment", content: c, location: loc } );
            }
          }
        },
      peg$c221 = function() {
          return undefined;
        },
      peg$c222 = "par",
      peg$c223 = peg$literalExpectation("par", false),
      peg$c224 = function() {
          return true;
        },
      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,
      peg$tracer = "tracer" in options ? options.tracer : new peg$DefaultTracer(),
      peg$result;
  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }
    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }
  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }
  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }
  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }
  function peg$anyExpectation() {
    return { type: "any" };
  }
  function peg$endExpectation() {
    return { type: "end" };
  }
  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }
  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;
    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }
      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };
      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }
        p++;
      }
      peg$posDetailsCache[pos] = details;
      return details;
    }
  }
  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }
  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }
    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }
    peg$maxFailExpected.push(expected);
  }
  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError$1(
      peg$SyntaxError$1.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }
  function peg$parseRoot() {
    var s0, s1, s2, s3,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Root",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseElement();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseElement();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Root",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Root",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsePreamble() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Preamble",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$currPos;
      s6 = peg$parseescape();
      if (s6 !== peg$FAILED) {
        if (input.substr(peg$currPos, 15) === peg$c1) {
          s7 = peg$c1;
          peg$currPos += 15;
        } else {
          s7 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c2); }
        }
        if (s7 !== peg$FAILED) {
          s6 = [s6, s7];
          s5 = s6;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
      } else {
        peg$currPos = s5;
        s5 = peg$FAILED;
      }
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseElement();
        if (s5 !== peg$FAILED) {
          peg$savedPos = s3;
          s4 = peg$c3(s5);
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$currPos;
        s6 = peg$parseescape();
        if (s6 !== peg$FAILED) {
          if (input.substr(peg$currPos, 15) === peg$c1) {
            s7 = peg$c1;
            peg$currPos += 15;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c2); }
          }
          if (s7 !== peg$FAILED) {
            s6 = [s6, s7];
            s5 = s6;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseElement();
          if (s5 !== peg$FAILED) {
            peg$savedPos = s3;
            s4 = peg$c3(s5);
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = peg$currPos;
        s5 = peg$parseescape();
        if (s5 !== peg$FAILED) {
          if (input.substr(peg$currPos, 15) === peg$c1) {
            s6 = peg$c1;
            peg$currPos += 15;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c2); }
          }
          if (s6 !== peg$FAILED) {
            s7 = [];
            if (input.length > peg$currPos) {
              s8 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            while (s8 !== peg$FAILED) {
              s7.push(s8);
              if (input.length > peg$currPos) {
                s8 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
              }
            }
            if (s7 !== peg$FAILED) {
              s5 = [s5, s6, s7];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c5(s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Preamble",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Preamble",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseElement() {
    var s0, s1, s2,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Element",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseElement_p();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c6(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Element",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Element",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseElement_p() {
    var s0, s1, s2, s3, s4, s5,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Element_p",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$parseSpecialCommand();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsebreak();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c7();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$parseDefCommand();
        if (s0 === peg$FAILED) {
          s0 = peg$parseCommand();
          if (s0 === peg$FAILED) {
            s0 = peg$parseGroup();
            if (s0 === peg$FAILED) {
              s0 = peg$parseInlineMathShift();
              if (s0 === peg$FAILED) {
                s0 = peg$parseAlignmentTab();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseCommandParameterWithNumber();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseSuperscript();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseSubscript();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseActiveCharacter();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseignore();
                          if (s0 === peg$FAILED) {
                            s0 = peg$currPos;
                            s1 = peg$currPos;
                            s2 = [];
                            s3 = peg$currPos;
                            s4 = peg$currPos;
                            peg$silentFails++;
                            s5 = peg$parsenoncharToken();
                            peg$silentFails--;
                            if (s5 === peg$FAILED) {
                              s4 = void 0;
                            } else {
                              peg$currPos = s4;
                              s4 = peg$FAILED;
                            }
                            if (s4 !== peg$FAILED) {
                              if (input.length > peg$currPos) {
                                s5 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c4); }
                              }
                              if (s5 !== peg$FAILED) {
                                s4 = [s4, s5];
                                s3 = s4;
                              } else {
                                peg$currPos = s3;
                                s3 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s3;
                              s3 = peg$FAILED;
                            }
                            if (s3 !== peg$FAILED) {
                              while (s3 !== peg$FAILED) {
                                s2.push(s3);
                                s3 = peg$currPos;
                                s4 = peg$currPos;
                                peg$silentFails++;
                                s5 = peg$parsenoncharToken();
                                peg$silentFails--;
                                if (s5 === peg$FAILED) {
                                  s4 = void 0;
                                } else {
                                  peg$currPos = s4;
                                  s4 = peg$FAILED;
                                }
                                if (s4 !== peg$FAILED) {
                                  if (input.length > peg$currPos) {
                                    s5 = input.charAt(peg$currPos);
                                    peg$currPos++;
                                  } else {
                                    s5 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c4); }
                                  }
                                  if (s5 !== peg$FAILED) {
                                    s4 = [s4, s5];
                                    s3 = s4;
                                  } else {
                                    peg$currPos = s3;
                                    s3 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s3;
                                  s3 = peg$FAILED;
                                }
                              }
                            } else {
                              s2 = peg$FAILED;
                            }
                            if (s2 !== peg$FAILED) {
                              s1 = input.substring(s1, peg$currPos);
                            } else {
                              s1 = s2;
                            }
                            if (s1 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$c8(s1);
                            }
                            s0 = s1;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Element_p",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Element_p",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseMathElement() {
    var s0, s1, s2,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "MathElement",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseMathElement_p();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c6(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "MathElement",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "MathElement",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseMathElement_p() {
    var s0, s1, s2, s3, s4,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "MathElement_p",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$parseMathAlignedEnvironment();
    if (s0 === peg$FAILED) {
      s0 = peg$parseAmsmathTextCommand();
      if (s0 === peg$FAILED) {
        s0 = peg$parseSpecialCommand();
        if (s0 === peg$FAILED) {
          s0 = peg$parseMatchingDelimiters();
          if (s0 === peg$FAILED) {
            s0 = peg$parseMathematicalDelimiters();
            if (s0 === peg$FAILED) {
              s0 = peg$parseMathCommand();
              if (s0 === peg$FAILED) {
                s0 = peg$parseMathGroup();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseAlignmentTab();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseCommandParameterWithNumber();
                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos;
                      s1 = peg$parseSuperscript();
                      if (s1 !== peg$FAILED) {
                        s2 = peg$parseskip_space();
                        if (s2 !== peg$FAILED) {
                          s3 = peg$parseMathElement();
                          if (s3 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c9(s3);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        s1 = peg$parseSubscript();
                        if (s1 !== peg$FAILED) {
                          s2 = peg$parseskip_space();
                          if (s2 !== peg$FAILED) {
                            s3 = peg$parseMathElement();
                            if (s3 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$c10(s3);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseActiveCharacter();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parseignore();
                            if (s0 === peg$FAILED) {
                              s0 = peg$currPos;
                              s1 = peg$currPos;
                              s2 = peg$currPos;
                              s3 = peg$currPos;
                              peg$silentFails++;
                              s4 = peg$parsenonMathcharToken();
                              peg$silentFails--;
                              if (s4 === peg$FAILED) {
                                s3 = void 0;
                              } else {
                                peg$currPos = s3;
                                s3 = peg$FAILED;
                              }
                              if (s3 !== peg$FAILED) {
                                if (input.length > peg$currPos) {
                                  s4 = input.charAt(peg$currPos);
                                  peg$currPos++;
                                } else {
                                  s4 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c4); }
                                }
                                if (s4 !== peg$FAILED) {
                                  s3 = [s3, s4];
                                  s2 = s3;
                                } else {
                                  peg$currPos = s2;
                                  s2 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s2;
                                s2 = peg$FAILED;
                              }
                              if (s2 !== peg$FAILED) {
                                s1 = input.substring(s1, peg$currPos);
                              } else {
                                s1 = s2;
                              }
                              if (s1 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c11(s1);
                              }
                              s0 = s1;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "MathElement_p",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "MathElement_p",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsenonMathcharToken() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "nonMathcharToken",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$parsemathShift();
    if (s0 === peg$FAILED) {
      s0 = peg$parseescape();
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "nonMathcharToken",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "nonMathcharToken",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsenoncharToken() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "noncharToken",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$parseescape();
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 37) {
        s0 = peg$c12;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parsebeginGroup();
        if (s0 === peg$FAILED) {
          s0 = peg$parseendGroup();
          if (s0 === peg$FAILED) {
            s0 = peg$parsemathShift();
            if (s0 === peg$FAILED) {
              s0 = peg$parseAlignmentTab();
              if (s0 === peg$FAILED) {
                s0 = peg$parsenl();
                if (s0 === peg$FAILED) {
                  s0 = peg$parsecommandParameter();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseSuperscript();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseSubscript();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseignore();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parsesp();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parseEOF();
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "noncharToken",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "noncharToken",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseSpecialCommand() {
    var s0, startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "SpecialCommand",
      location: peg$computeLocation(startPos, startPos)
    });
    peg$silentFails++;
    s0 = peg$parseVerb();
    if (s0 === peg$FAILED) {
      s0 = peg$parseVerbatim();
      if (s0 === peg$FAILED) {
        s0 = peg$parseMinted();
        if (s0 === peg$FAILED) {
          s0 = peg$parseLstlisting();
          if (s0 === peg$FAILED) {
            s0 = peg$parsecommentenv();
            if (s0 === peg$FAILED) {
              s0 = peg$parseDisplayMath();
              if (s0 === peg$FAILED) {
                s0 = peg$parseInlineMathParen();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseMathEnvironment();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseEnvironment();
                  }
                }
              }
            }
          }
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      if (peg$silentFails === 0) { peg$fail(peg$c16); }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "SpecialCommand",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "SpecialCommand",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseVerb() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Verb",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 5) === peg$c17) {
        s2 = peg$c17;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c18); }
      }
      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c19) {
          s2 = peg$c19;
          peg$currPos += 4;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c20); }
        }
      }
      if (s2 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$currPos;
          s7 = peg$currPos;
          peg$silentFails++;
          s8 = peg$currPos;
          if (input.length > peg$currPos) {
            s9 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s9 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
          if (s9 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s10 = peg$c21(s2, s3, s9);
            if (s10) {
              s10 = void 0;
            } else {
              s10 = peg$FAILED;
            }
            if (s10 !== peg$FAILED) {
              s9 = [s9, s10];
              s8 = s9;
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
          } else {
            peg$currPos = s8;
            s8 = peg$FAILED;
          }
          peg$silentFails--;
          if (s8 === peg$FAILED) {
            s7 = void 0;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          if (s7 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s8 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s8 !== peg$FAILED) {
              s7 = [s7, s8];
              s6 = s7;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$currPos;
            s7 = peg$currPos;
            peg$silentFails++;
            s8 = peg$currPos;
            if (input.length > peg$currPos) {
              s9 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s9 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s9 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s10 = peg$c21(s2, s3, s9);
              if (s10) {
                s10 = void 0;
              } else {
                s10 = peg$FAILED;
              }
              if (s10 !== peg$FAILED) {
                s9 = [s9, s10];
                s8 = s9;
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
            peg$silentFails--;
            if (s8 === peg$FAILED) {
              s7 = void 0;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s8 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
              }
              if (s8 !== peg$FAILED) {
                s7 = [s7, s8];
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            if (input.length > peg$currPos) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s6 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s7 = peg$c22(s2, s3, s4, s6);
              if (s7) {
                s7 = void 0;
              } else {
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c23(s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Verb",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Verb",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseVerbatim() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Verbatim",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 15) === peg$c24) {
        s2 = peg$c24;
        peg$currPos += 15;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$currPos;
        s6 = peg$currPos;
        peg$silentFails++;
        s7 = peg$currPos;
        s8 = peg$parseescape();
        if (s8 !== peg$FAILED) {
          if (input.substr(peg$currPos, 13) === peg$c26) {
            s9 = peg$c26;
            peg$currPos += 13;
          } else {
            s9 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c27); }
          }
          if (s9 !== peg$FAILED) {
            s8 = [s8, s9];
            s7 = s8;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
        } else {
          peg$currPos = s7;
          s7 = peg$FAILED;
        }
        peg$silentFails--;
        if (s7 === peg$FAILED) {
          s6 = void 0;
        } else {
          peg$currPos = s6;
          s6 = peg$FAILED;
        }
        if (s6 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s7 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
          if (s7 !== peg$FAILED) {
            s6 = [s6, s7];
            s5 = s6;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$currPos;
          s8 = peg$parseescape();
          if (s8 !== peg$FAILED) {
            if (input.substr(peg$currPos, 13) === peg$c26) {
              s9 = peg$c26;
              peg$currPos += 13;
            } else {
              s9 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c27); }
            }
            if (s9 !== peg$FAILED) {
              s8 = [s8, s9];
              s7 = s8;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseescape();
          if (s4 !== peg$FAILED) {
            if (input.substr(peg$currPos, 13) === peg$c26) {
              s5 = peg$c26;
              peg$currPos += 13;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c27); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c28(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseescape();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 16) === peg$c29) {
          s2 = peg$c29;
          peg$currPos += 16;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c30); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$currPos;
          s8 = peg$parseescape();
          if (s8 !== peg$FAILED) {
            if (input.substr(peg$currPos, 14) === peg$c31) {
              s9 = peg$c31;
              peg$currPos += 14;
            } else {
              s9 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c32); }
            }
            if (s9 !== peg$FAILED) {
              s8 = [s8, s9];
              s7 = s8;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$currPos;
            peg$silentFails++;
            s7 = peg$currPos;
            s8 = peg$parseescape();
            if (s8 !== peg$FAILED) {
              if (input.substr(peg$currPos, 14) === peg$c31) {
                s9 = peg$c31;
                peg$currPos += 14;
              } else {
                s9 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c32); }
              }
              if (s9 !== peg$FAILED) {
                s8 = [s8, s9];
                s7 = s8;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            peg$silentFails--;
            if (s7 === peg$FAILED) {
              s6 = void 0;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s7 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
              }
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseescape();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 14) === peg$c31) {
                s5 = peg$c31;
                peg$currPos += 14;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c32); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c33(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Verbatim",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Verbatim",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseMinted() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Minted",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 13) === peg$c34) {
        s2 = peg$c34;
        peg$currPos += 13;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = peg$parseargumentList();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseGroup();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 === peg$FAILED) {
          s3 = peg$parseGroup();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$currPos;
          s7 = peg$currPos;
          peg$silentFails++;
          s8 = peg$currPos;
          s9 = peg$parseescape();
          if (s9 !== peg$FAILED) {
            if (input.substr(peg$currPos, 11) === peg$c36) {
              s10 = peg$c36;
              peg$currPos += 11;
            } else {
              s10 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c37); }
            }
            if (s10 !== peg$FAILED) {
              s9 = [s9, s10];
              s8 = s9;
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
          } else {
            peg$currPos = s8;
            s8 = peg$FAILED;
          }
          peg$silentFails--;
          if (s8 === peg$FAILED) {
            s7 = void 0;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          if (s7 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s8 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s8 !== peg$FAILED) {
              s7 = [s7, s8];
              s6 = s7;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$currPos;
            s7 = peg$currPos;
            peg$silentFails++;
            s8 = peg$currPos;
            s9 = peg$parseescape();
            if (s9 !== peg$FAILED) {
              if (input.substr(peg$currPos, 11) === peg$c36) {
                s10 = peg$c36;
                peg$currPos += 11;
              } else {
                s10 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c37); }
              }
              if (s10 !== peg$FAILED) {
                s9 = [s9, s10];
                s8 = s9;
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
            peg$silentFails--;
            if (s8 === peg$FAILED) {
              s7 = void 0;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s8 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
              }
              if (s8 !== peg$FAILED) {
                s7 = [s7, s8];
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseescape();
            if (s5 !== peg$FAILED) {
              if (input.substr(peg$currPos, 11) === peg$c36) {
                s6 = peg$c36;
                peg$currPos += 11;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c37); }
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c38(s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Minted",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Minted",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseLstlisting() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Lstlisting",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 17) === peg$c39) {
        s2 = peg$c39;
        peg$currPos += 17;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseargumentList();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$currPos;
          s7 = peg$currPos;
          peg$silentFails++;
          s8 = peg$currPos;
          s9 = peg$parseescape();
          if (s9 !== peg$FAILED) {
            if (input.substr(peg$currPos, 15) === peg$c41) {
              s10 = peg$c41;
              peg$currPos += 15;
            } else {
              s10 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c42); }
            }
            if (s10 !== peg$FAILED) {
              s9 = [s9, s10];
              s8 = s9;
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
          } else {
            peg$currPos = s8;
            s8 = peg$FAILED;
          }
          peg$silentFails--;
          if (s8 === peg$FAILED) {
            s7 = void 0;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          if (s7 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s8 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s8 !== peg$FAILED) {
              s7 = [s7, s8];
              s6 = s7;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$currPos;
            s7 = peg$currPos;
            peg$silentFails++;
            s8 = peg$currPos;
            s9 = peg$parseescape();
            if (s9 !== peg$FAILED) {
              if (input.substr(peg$currPos, 15) === peg$c41) {
                s10 = peg$c41;
                peg$currPos += 15;
              } else {
                s10 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c42); }
              }
              if (s10 !== peg$FAILED) {
                s9 = [s9, s10];
                s8 = s9;
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
            peg$silentFails--;
            if (s8 === peg$FAILED) {
              s7 = void 0;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s8 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
              }
              if (s8 !== peg$FAILED) {
                s7 = [s7, s8];
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseescape();
            if (s5 !== peg$FAILED) {
              if (input.substr(peg$currPos, 15) === peg$c41) {
                s6 = peg$c41;
                peg$currPos += 15;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c42); }
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c43(s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Lstlisting",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Lstlisting",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsecommentenv() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "commentenv",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 14) === peg$c44) {
        s2 = peg$c44;
        peg$currPos += 14;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c45); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$currPos;
        s6 = peg$currPos;
        peg$silentFails++;
        s7 = peg$currPos;
        s8 = peg$parseescape();
        if (s8 !== peg$FAILED) {
          if (input.substr(peg$currPos, 12) === peg$c46) {
            s9 = peg$c46;
            peg$currPos += 12;
          } else {
            s9 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c47); }
          }
          if (s9 !== peg$FAILED) {
            s8 = [s8, s9];
            s7 = s8;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
        } else {
          peg$currPos = s7;
          s7 = peg$FAILED;
        }
        peg$silentFails--;
        if (s7 === peg$FAILED) {
          s6 = void 0;
        } else {
          peg$currPos = s6;
          s6 = peg$FAILED;
        }
        if (s6 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s7 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
          if (s7 !== peg$FAILED) {
            s6 = [s6, s7];
            s5 = s6;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$currPos;
          s8 = peg$parseescape();
          if (s8 !== peg$FAILED) {
            if (input.substr(peg$currPos, 12) === peg$c46) {
              s9 = peg$c46;
              peg$currPos += 12;
            } else {
              s9 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c47); }
            }
            if (s9 !== peg$FAILED) {
              s8 = [s8, s9];
              s7 = s8;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseescape();
          if (s4 !== peg$FAILED) {
            if (input.substr(peg$currPos, 12) === peg$c46) {
              s5 = peg$c46;
              peg$currPos += 12;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c47); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c48(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "commentenv",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "commentenv",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseInlineMathShift() {
    var s0, s1, s2, s3, s4, s5, s6,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "InlineMathShift",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parsemathShift();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$currPos;
        peg$silentFails++;
        s6 = peg$parsemathShift();
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = void 0;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseMathElement();
          if (s6 !== peg$FAILED) {
            peg$savedPos = s4;
            s5 = peg$c49(s6);
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$currPos;
            peg$silentFails++;
            s6 = peg$parsemathShift();
            peg$silentFails--;
            if (s6 === peg$FAILED) {
              s5 = void 0;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseMathElement();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c49(s6);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsemathShift();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c50(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsemathShift();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsewhitespace();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$currPos;
          peg$silentFails++;
          s6 = peg$parsemathShift();
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = void 0;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseMathElement();
            if (s6 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c49(s6);
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$currPos;
            peg$silentFails++;
            s6 = peg$parsemathShift();
            peg$silentFails--;
            if (s6 === peg$FAILED) {
              s5 = void 0;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseMathElement();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c49(s6);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsemathShift();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c50(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "InlineMathShift",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "InlineMathShift",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseInlineMathParen() {
    var s0, s1, s2, s3, s4, s5, s6,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "InlineMathParen",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parsebeginInlineMath();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$currPos;
        peg$silentFails++;
        s6 = peg$parseendInlineMath();
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = void 0;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseMathElement();
          if (s6 !== peg$FAILED) {
            peg$savedPos = s4;
            s5 = peg$c51(s6);
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          s5 = peg$currPos;
          peg$silentFails++;
          s6 = peg$parseendInlineMath();
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = void 0;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseMathElement();
            if (s6 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c51(s6);
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseendInlineMath();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c52(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "InlineMathParen",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "InlineMathParen",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseDisplayMath() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "DisplayMath",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$parsedisplayMathSquareBracket();
    if (s0 === peg$FAILED) {
      s0 = peg$parsedisplayMathShiftShift();
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "DisplayMath",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "DisplayMath",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsedisplayMathSquareBracket() {
    var s0, s1, s2, s3, s4, s5, s6,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "displayMathSquareBracket",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parsebeginDisplayMath();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$currPos;
        peg$silentFails++;
        s6 = peg$parseendDisplayMath();
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = void 0;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseMathElement();
          if (s6 !== peg$FAILED) {
            peg$savedPos = s4;
            s5 = peg$c51(s6);
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          s5 = peg$currPos;
          peg$silentFails++;
          s6 = peg$parseendDisplayMath();
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = void 0;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseMathElement();
            if (s6 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c51(s6);
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseendDisplayMath();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c53(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "displayMathSquareBracket",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "displayMathSquareBracket",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsedisplayMathShiftShift() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "displayMathShiftShift",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parsemathShift();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsemathShift();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$currPos;
          s8 = peg$parsemathShift();
          if (s8 !== peg$FAILED) {
            s9 = peg$parsemathShift();
            if (s9 !== peg$FAILED) {
              s8 = [s8, s9];
              s7 = s8;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            s7 = peg$parseMathElement();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s5;
              s6 = peg$c51(s7);
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$currPos;
            peg$silentFails++;
            s7 = peg$currPos;
            s8 = peg$parsemathShift();
            if (s8 !== peg$FAILED) {
              s9 = peg$parsemathShift();
              if (s9 !== peg$FAILED) {
                s8 = [s8, s9];
                s7 = s8;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            peg$silentFails--;
            if (s7 === peg$FAILED) {
              s6 = void 0;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseMathElement();
              if (s7 !== peg$FAILED) {
                peg$savedPos = s5;
                s6 = peg$c51(s7);
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsemathShift();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsemathShift();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c53(s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "displayMathShiftShift",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "displayMathShiftShift",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseCommand() {
    var s0, s1, s2, s3, s4,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Command",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$parseLabelCommand();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseescape();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecommandName();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseargumentList();
          if (s4 === peg$FAILED) {
            s4 = peg$parseGroup();
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseargumentList();
            if (s4 === peg$FAILED) {
              s4 = peg$parseGroup();
            }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c54(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Command",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Command",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsecommandName() {
    var s0, s1, s2, s3,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "commandName",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parsechar();
    if (s3 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 64) {
        s3 = peg$c55;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c56); }
      }
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsechar();
        if (s3 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 64) {
            s3 = peg$c55;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c56); }
          }
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 42) {
          s3 = peg$c57;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c58); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c59(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechar();
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 64) {
          s2 = peg$c55;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c56); }
        }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechar();
          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 64) {
              s2 = peg$c55;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c56); }
            }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c60) {
          s0 = peg$c60;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c61); }
        }
        if (s0 === peg$FAILED) {
          if (input.length > peg$currPos) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
        }
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "commandName",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "commandName",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseLabelCommand() {
    var s0, s1, s2, s3,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "LabelCommand",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 5) === peg$c62) {
        s2 = peg$c62;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c63); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseLabelGroup();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c64(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "LabelCommand",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "LabelCommand",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseMathCommand() {
    var s0, s1, s2, s3, s4, s5,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "MathCommand",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$parseLabelCommand();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseescape();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parsenonMathCommandName();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecommandName();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseargumentList();
          if (s4 === peg$FAILED) {
            s4 = peg$parseMathGroup();
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseargumentList();
            if (s4 === peg$FAILED) {
              s4 = peg$parseMathGroup();
            }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c54(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "MathCommand",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "MathCommand",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsenonMathCommandName() {
    var s0, s1, s2,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "nonMathCommandName",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c65) {
      s1 = peg$c65;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c66); }
    }
    if (s1 !== peg$FAILED) {
      if (peg$c67.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c68); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 91) {
        s0 = peg$c69;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c70); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 93) {
          s0 = peg$c71;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c72); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s0 = peg$c73;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c74); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s0 = peg$c75;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c76); }
            }
          }
        }
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "nonMathCommandName",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "nonMathCommandName",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseDefCommand() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "DefCommand",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c77) {
        s2 = peg$c77;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c78); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = peg$currPos;
          s6 = peg$parseescape();
          if (s6 !== peg$FAILED) {
            s7 = [];
            s8 = peg$parsechar();
            if (s8 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 64) {
                s8 = peg$c55;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c56); }
              }
            }
            if (s8 !== peg$FAILED) {
              while (s8 !== peg$FAILED) {
                s7.push(s8);
                s8 = peg$parsechar();
                if (s8 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 64) {
                    s8 = peg$c55;
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c56); }
                  }
                }
              }
            } else {
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parseargumentList();
            if (s6 === peg$FAILED) {
              s6 = peg$parseCommandParameterWithNumber();
            }
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseargumentList();
              if (s6 === peg$FAILED) {
                s6 = peg$parseCommandParameterWithNumber();
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseskip_space();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseGroup();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c79(s4, s5, s7);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "DefCommand",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "DefCommand",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseGroup() {
    var s0, s1, s2, s3, s4, s5, s6, s7,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Group",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsebeginGroup();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$parseendGroup();
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            s7 = peg$parseElement();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s5;
              s6 = peg$c80(s7);
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$currPos;
            peg$silentFails++;
            s7 = peg$parseendGroup();
            peg$silentFails--;
            if (s7 === peg$FAILED) {
              s6 = void 0;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseElement();
              if (s7 !== peg$FAILED) {
                peg$savedPos = s5;
                s6 = peg$c80(s7);
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseendGroup();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c81(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Group",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Group",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseMathGroup() {
    var s0, s1, s2, s3, s4, s5, s6, s7,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "MathGroup",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsebeginGroup();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$parseendGroup();
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            s7 = peg$parseMathElement();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s5;
              s6 = peg$c80(s7);
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$currPos;
            peg$silentFails++;
            s7 = peg$parseendGroup();
            peg$silentFails--;
            if (s7 === peg$FAILED) {
              s6 = void 0;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseMathElement();
              if (s7 !== peg$FAILED) {
                peg$savedPos = s5;
                s6 = peg$c80(s7);
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseendGroup();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c81(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "MathGroup",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "MathGroup",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseLabelGroup() {
    var s0, s1, s2, s3, s4, s5,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "LabelGroup",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsebeginGroup();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseLabelText();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseendGroup();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c82(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "LabelGroup",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "LabelGroup",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseLabelText() {
    var s0, s1, s2, s3, s4, s5,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "LabelText",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$currPos;
    s4 = peg$currPos;
    peg$silentFails++;
    s5 = peg$parseendGroup();
    peg$silentFails--;
    if (s5 === peg$FAILED) {
      s4 = void 0;
    } else {
      peg$currPos = s4;
      s4 = peg$FAILED;
    }
    if (s4 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s5 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c4); }
      }
      if (s5 !== peg$FAILED) {
        s4 = [s4, s5];
        s3 = s4;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    while (s3 !== peg$FAILED) {
      s2.push(s3);
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parseendGroup();
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c83(s1);
    }
    s0 = s1;
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "LabelText",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "LabelText",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseMatchingDelimiters() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "MatchingDelimiters",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseescape();
      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c84) {
          s3 = peg$c84;
          peg$currPos += 4;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c85); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            s6 = peg$parsemathDelimiter();
            if (s6 !== peg$FAILED) {
              s5 = input.substring(s5, peg$currPos);
            } else {
              s5 = s6;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseskip_space();
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$currPos;
                s9 = peg$currPos;
                peg$silentFails++;
                s10 = peg$currPos;
                s11 = peg$parseescape();
                if (s11 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 5) === peg$c86) {
                    s12 = peg$c86;
                    peg$currPos += 5;
                  } else {
                    s12 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c87); }
                  }
                  if (s12 !== peg$FAILED) {
                    s13 = peg$parsemathDelimiter();
                    if (s13 !== peg$FAILED) {
                      s11 = [s11, s12, s13];
                      s10 = s11;
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s10;
                  s10 = peg$FAILED;
                }
                peg$silentFails--;
                if (s10 === peg$FAILED) {
                  s9 = void 0;
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
                if (s9 !== peg$FAILED) {
                  s10 = peg$parseMathElement();
                  if (s10 !== peg$FAILED) {
                    peg$savedPos = s8;
                    s9 = peg$c88(s5, s10);
                    s8 = s9;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$currPos;
                  s9 = peg$currPos;
                  peg$silentFails++;
                  s10 = peg$currPos;
                  s11 = peg$parseescape();
                  if (s11 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 5) === peg$c86) {
                      s12 = peg$c86;
                      peg$currPos += 5;
                    } else {
                      s12 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c87); }
                    }
                    if (s12 !== peg$FAILED) {
                      s13 = peg$parsemathDelimiter();
                      if (s13 !== peg$FAILED) {
                        s11 = [s11, s12, s13];
                        s10 = s11;
                      } else {
                        peg$currPos = s10;
                        s10 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                  peg$silentFails--;
                  if (s10 === peg$FAILED) {
                    s9 = void 0;
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parseMathElement();
                    if (s10 !== peg$FAILED) {
                      peg$savedPos = s8;
                      s9 = peg$c88(s5, s10);
                      s8 = s9;
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseescape();
                  if (s8 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 5) === peg$c86) {
                      s9 = peg$c86;
                      peg$currPos += 5;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c87); }
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parseskip_space();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$currPos;
                        s12 = peg$parsemathDelimiter();
                        if (s12 !== peg$FAILED) {
                          s11 = input.substring(s11, peg$currPos);
                        } else {
                          s11 = s12;
                        }
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c89(s5, s7, s11);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "MatchingDelimiters",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "MatchingDelimiters",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsemathDelimiter() {
    var s0, s1, s2, s3,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "mathDelimiter",
      location: peg$computeLocation(startPos, startPos)
    });
    if (peg$c90.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c91); }
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseescape();
      if (s1 !== peg$FAILED) {
        if (peg$c92.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c93); }
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseescape();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsechar();
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsechar();
            }
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s1 = [s1, s2];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "mathDelimiter",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "mathDelimiter",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseMathematicalDelimiters() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "MathematicalDelimiters",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = peg$parsesizeCommand();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s4 = peg$c73;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c74); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseskip_space();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$currPos;
              s8 = peg$currPos;
              peg$silentFails++;
              s9 = peg$currPos;
              s10 = peg$parsesizeCommand();
              if (s10 === peg$FAILED) {
                s10 = null;
              }
              if (s10 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 41) {
                  s11 = peg$c75;
                  peg$currPos++;
                } else {
                  s11 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c76); }
                }
                if (s11 !== peg$FAILED) {
                  s10 = [s10, s11];
                  s9 = s10;
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
              } else {
                peg$currPos = s9;
                s9 = peg$FAILED;
              }
              peg$silentFails--;
              if (s9 === peg$FAILED) {
                s8 = void 0;
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
              if (s8 !== peg$FAILED) {
                s9 = peg$parseMathElement();
                if (s9 !== peg$FAILED) {
                  peg$savedPos = s7;
                  s8 = peg$c94(s2, s9);
                  s7 = s8;
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$currPos;
                s8 = peg$currPos;
                peg$silentFails++;
                s9 = peg$currPos;
                s10 = peg$parsesizeCommand();
                if (s10 === peg$FAILED) {
                  s10 = null;
                }
                if (s10 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s11 = peg$c75;
                    peg$currPos++;
                  } else {
                    s11 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c76); }
                  }
                  if (s11 !== peg$FAILED) {
                    s10 = [s10, s11];
                    s9 = s10;
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
                peg$silentFails--;
                if (s9 === peg$FAILED) {
                  s8 = void 0;
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
                if (s8 !== peg$FAILED) {
                  s9 = peg$parseMathElement();
                  if (s9 !== peg$FAILED) {
                    peg$savedPos = s7;
                    s8 = peg$c94(s2, s9);
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;
                s8 = peg$parsesizeCommand();
                if (s8 === peg$FAILED) {
                  s8 = null;
                }
                if (s8 !== peg$FAILED) {
                  s7 = input.substring(s7, peg$currPos);
                } else {
                  s7 = s8;
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseskip_space();
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 41) {
                      s9 = peg$c75;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c76); }
                    }
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c95(s2, s6, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseskip_space();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parsesizeCommand();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseskip_space();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 91) {
              s4 = peg$c69;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c70); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseskip_space();
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$currPos;
                s8 = peg$currPos;
                peg$silentFails++;
                s9 = peg$currPos;
                s10 = peg$parsesizeCommand();
                if (s10 === peg$FAILED) {
                  s10 = null;
                }
                if (s10 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 93) {
                    s11 = peg$c71;
                    peg$currPos++;
                  } else {
                    s11 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c72); }
                  }
                  if (s11 !== peg$FAILED) {
                    s10 = [s10, s11];
                    s9 = s10;
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
                peg$silentFails--;
                if (s9 === peg$FAILED) {
                  s8 = void 0;
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
                if (s8 !== peg$FAILED) {
                  s9 = peg$parseMathElement();
                  if (s9 !== peg$FAILED) {
                    peg$savedPos = s7;
                    s8 = peg$c94(s2, s9);
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$currPos;
                  s8 = peg$currPos;
                  peg$silentFails++;
                  s9 = peg$currPos;
                  s10 = peg$parsesizeCommand();
                  if (s10 === peg$FAILED) {
                    s10 = null;
                  }
                  if (s10 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 93) {
                      s11 = peg$c71;
                      peg$currPos++;
                    } else {
                      s11 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c72); }
                    }
                    if (s11 !== peg$FAILED) {
                      s10 = [s10, s11];
                      s9 = s10;
                    } else {
                      peg$currPos = s9;
                      s9 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                  peg$silentFails--;
                  if (s9 === peg$FAILED) {
                    s8 = void 0;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseMathElement();
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s7;
                      s8 = peg$c94(s2, s9);
                      s7 = s8;
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$currPos;
                  s8 = peg$parsesizeCommand();
                  if (s8 === peg$FAILED) {
                    s8 = null;
                  }
                  if (s8 !== peg$FAILED) {
                    s7 = input.substring(s7, peg$currPos);
                  } else {
                    s7 = s8;
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseskip_space();
                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s9 = peg$c71;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c72); }
                      }
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c96(s2, s6, s7);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseskip_space();
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$parsesizeCommand();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s2 = input.substring(s2, peg$currPos);
          } else {
            s2 = s3;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseskip_space();
            if (s3 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c97) {
                s4 = peg$c97;
                peg$currPos += 2;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c98); }
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parseskip_space();
                if (s5 !== peg$FAILED) {
                  s6 = [];
                  s7 = peg$currPos;
                  s8 = peg$currPos;
                  peg$silentFails++;
                  s9 = peg$currPos;
                  s10 = peg$parsesizeCommand();
                  if (s10 === peg$FAILED) {
                    s10 = null;
                  }
                  if (s10 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 2) === peg$c99) {
                      s11 = peg$c99;
                      peg$currPos += 2;
                    } else {
                      s11 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c100); }
                    }
                    if (s11 !== peg$FAILED) {
                      s10 = [s10, s11];
                      s9 = s10;
                    } else {
                      peg$currPos = s9;
                      s9 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                  peg$silentFails--;
                  if (s9 === peg$FAILED) {
                    s8 = void 0;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseMathElement();
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s7;
                      s8 = peg$c94(s2, s9);
                      s7 = s8;
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                  while (s7 !== peg$FAILED) {
                    s6.push(s7);
                    s7 = peg$currPos;
                    s8 = peg$currPos;
                    peg$silentFails++;
                    s9 = peg$currPos;
                    s10 = peg$parsesizeCommand();
                    if (s10 === peg$FAILED) {
                      s10 = null;
                    }
                    if (s10 !== peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c99) {
                        s11 = peg$c99;
                        peg$currPos += 2;
                      } else {
                        s11 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c100); }
                      }
                      if (s11 !== peg$FAILED) {
                        s10 = [s10, s11];
                        s9 = s10;
                      } else {
                        peg$currPos = s9;
                        s9 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s9;
                      s9 = peg$FAILED;
                    }
                    peg$silentFails--;
                    if (s9 === peg$FAILED) {
                      s8 = void 0;
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseMathElement();
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s7;
                        s8 = peg$c94(s2, s9);
                        s7 = s8;
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$currPos;
                    s8 = peg$parsesizeCommand();
                    if (s8 === peg$FAILED) {
                      s8 = null;
                    }
                    if (s8 !== peg$FAILED) {
                      s7 = input.substring(s7, peg$currPos);
                    } else {
                      s7 = s8;
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parseskip_space();
                      if (s8 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 2) === peg$c99) {
                          s9 = peg$c99;
                          peg$currPos += 2;
                        } else {
                          s9 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c100); }
                        }
                        if (s9 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c101(s2, s6, s7);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "MathematicalDelimiters",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "MathematicalDelimiters",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsesizeCommand() {
    var s0, s1, s2, s3,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "sizeCommand",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c102) {
        s2 = peg$c102;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c103); }
      }
      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c104) {
          s2 = peg$c104;
          peg$currPos += 4;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c105); }
        }
        if (s2 === peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c106) {
            s2 = peg$c106;
            peg$currPos += 3;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c107); }
          }
          if (s2 === peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c108) {
              s2 = peg$c108;
              peg$currPos += 3;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c109); }
            }
          }
        }
      }
      if (s2 !== peg$FAILED) {
        if (peg$c110.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c111); }
        }
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "sizeCommand",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "sizeCommand",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseargumentList() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "argumentList",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 91) {
        s2 = peg$c69;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c70); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 93) {
          s6 = peg$c71;
          peg$currPos++;
        } else {
          s6 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c72); }
        }
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = void 0;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseskip_space();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseargsDelimiter();
            if (s7 === peg$FAILED) {
              s7 = peg$parseargsToken();
            }
            if (s7 !== peg$FAILED) {
              s8 = peg$parseskip_space();
              if (s8 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c51(s7);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          s5 = peg$currPos;
          peg$silentFails++;
          if (input.charCodeAt(peg$currPos) === 93) {
            s6 = peg$c71;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c72); }
          }
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = void 0;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseskip_space();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseargsDelimiter();
              if (s7 === peg$FAILED) {
                s7 = peg$parseargsToken();
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parseskip_space();
                if (s8 !== peg$FAILED) {
                  peg$savedPos = s4;
                  s5 = peg$c51(s7);
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 93) {
            s4 = peg$c71;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c72); }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c112(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "argumentList",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "argumentList",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseargsToken() {
    var s0, s1, s2, s3, s4, s5, s6,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "argsToken",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$parseSpecialCommand();
    if (s0 === peg$FAILED) {
      s0 = peg$parseCommand();
      if (s0 === peg$FAILED) {
        s0 = peg$parseGroup();
        if (s0 === peg$FAILED) {
          s0 = peg$parseInlineMathShift();
          if (s0 === peg$FAILED) {
            s0 = peg$parseAlignmentTab();
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = [];
              s2 = peg$parsesp();
              while (s2 !== peg$FAILED) {
                s1.push(s2);
                s2 = peg$parsesp();
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parsenl();
                if (s2 !== peg$FAILED) {
                  s3 = [];
                  s4 = peg$parsesp();
                  while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parsesp();
                  }
                  if (s3 !== peg$FAILED) {
                    s4 = [];
                    s5 = peg$parsenl();
                    if (s5 !== peg$FAILED) {
                      while (s5 !== peg$FAILED) {
                        s4.push(s5);
                        s5 = peg$parsenl();
                      }
                    } else {
                      s4 = peg$FAILED;
                    }
                    if (s4 !== peg$FAILED) {
                      s5 = [];
                      s6 = peg$parsesp();
                      while (s6 !== peg$FAILED) {
                        s5.push(s6);
                        s6 = peg$parsesp();
                      }
                      if (s5 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c113();
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$parseCommandParameterWithNumber();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseSuperscript();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseSubscript();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseignore();
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        s1 = peg$currPos;
                        s2 = [];
                        s3 = peg$currPos;
                        s4 = peg$currPos;
                        peg$silentFails++;
                        s5 = peg$parsenoncharToken();
                        if (s5 === peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 44) {
                            s5 = peg$c114;
                            peg$currPos++;
                          } else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c115); }
                          }
                          if (s5 === peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 93) {
                              s5 = peg$c71;
                              peg$currPos++;
                            } else {
                              s5 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c72); }
                            }
                          }
                        }
                        peg$silentFails--;
                        if (s5 === peg$FAILED) {
                          s4 = void 0;
                        } else {
                          peg$currPos = s4;
                          s4 = peg$FAILED;
                        }
                        if (s4 !== peg$FAILED) {
                          if (input.length > peg$currPos) {
                            s5 = input.charAt(peg$currPos);
                            peg$currPos++;
                          } else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c4); }
                          }
                          if (s5 !== peg$FAILED) {
                            s4 = [s4, s5];
                            s3 = s4;
                          } else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }
                        if (s3 !== peg$FAILED) {
                          while (s3 !== peg$FAILED) {
                            s2.push(s3);
                            s3 = peg$currPos;
                            s4 = peg$currPos;
                            peg$silentFails++;
                            s5 = peg$parsenoncharToken();
                            if (s5 === peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 44) {
                                s5 = peg$c114;
                                peg$currPos++;
                              } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c115); }
                              }
                              if (s5 === peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 93) {
                                  s5 = peg$c71;
                                  peg$currPos++;
                                } else {
                                  s5 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c72); }
                                }
                              }
                            }
                            peg$silentFails--;
                            if (s5 === peg$FAILED) {
                              s4 = void 0;
                            } else {
                              peg$currPos = s4;
                              s4 = peg$FAILED;
                            }
                            if (s4 !== peg$FAILED) {
                              if (input.length > peg$currPos) {
                                s5 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c4); }
                              }
                              if (s5 !== peg$FAILED) {
                                s4 = [s4, s5];
                                s3 = s4;
                              } else {
                                peg$currPos = s3;
                                s3 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s3;
                              s3 = peg$FAILED;
                            }
                          }
                        } else {
                          s2 = peg$FAILED;
                        }
                        if (s2 !== peg$FAILED) {
                          s1 = input.substring(s1, peg$currPos);
                        } else {
                          s1 = s2;
                        }
                        if (s1 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c116(s1);
                        }
                        s0 = s1;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "argsToken",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "argsToken",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseargsDelimiter() {
    var s0, s1,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "argsDelimiter",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 44) {
      s1 = peg$c114;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c115); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c117();
    }
    s0 = s1;
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "argsDelimiter",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "argsDelimiter",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseEnvironment() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Environment",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parsebeginEnv();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsegroupedEnvname();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseargumentList();
        if (s4 === peg$FAILED) {
          s4 = peg$parseGroup();
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseargumentList();
          if (s4 === peg$FAILED) {
            s4 = peg$parseGroup();
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$currPos;
            s7 = peg$currPos;
            peg$silentFails++;
            s8 = peg$currPos;
            s9 = peg$parseendEnv();
            if (s9 !== peg$FAILED) {
              s10 = peg$parsegroupedEnvname();
              if (s10 !== peg$FAILED) {
                peg$savedPos = peg$currPos;
                s11 = peg$c118(s2, s3, s10);
                if (s11) {
                  s11 = void 0;
                } else {
                  s11 = peg$FAILED;
                }
                if (s11 !== peg$FAILED) {
                  s9 = [s9, s10, s11];
                  s8 = s9;
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
            peg$silentFails--;
            if (s8 === peg$FAILED) {
              s7 = void 0;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              s8 = peg$parseElement();
              if (s8 !== peg$FAILED) {
                peg$savedPos = s6;
                s7 = peg$c119(s2, s3, s8);
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$currPos;
              s7 = peg$currPos;
              peg$silentFails++;
              s8 = peg$currPos;
              s9 = peg$parseendEnv();
              if (s9 !== peg$FAILED) {
                s10 = peg$parsegroupedEnvname();
                if (s10 !== peg$FAILED) {
                  peg$savedPos = peg$currPos;
                  s11 = peg$c118(s2, s3, s10);
                  if (s11) {
                    s11 = void 0;
                  } else {
                    s11 = peg$FAILED;
                  }
                  if (s11 !== peg$FAILED) {
                    s9 = [s9, s10, s11];
                    s8 = s9;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
              peg$silentFails--;
              if (s8 === peg$FAILED) {
                s7 = void 0;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parseElement();
                if (s8 !== peg$FAILED) {
                  peg$savedPos = s6;
                  s7 = peg$c119(s2, s3, s8);
                  s6 = s7;
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseendEnv();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsegroupedEnvname();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c120(s2, s3, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Environment",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Environment",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseMathEnvironment() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "MathEnvironment",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parsebeginEnv();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsebeginGroup();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsemathEnvName();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseendGroup();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseskip_space();
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$currPos;
                s9 = peg$currPos;
                peg$silentFails++;
                s10 = peg$currPos;
                s11 = peg$parseendEnv();
                if (s11 !== peg$FAILED) {
                  s12 = peg$parsegroupedEnvname();
                  if (s12 !== peg$FAILED) {
                    peg$savedPos = peg$currPos;
                    s13 = peg$c121(s4, s12);
                    if (s13) {
                      s13 = void 0;
                    } else {
                      s13 = peg$FAILED;
                    }
                    if (s13 !== peg$FAILED) {
                      s11 = [s11, s12, s13];
                      s10 = s11;
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s10;
                  s10 = peg$FAILED;
                }
                peg$silentFails--;
                if (s10 === peg$FAILED) {
                  s9 = void 0;
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
                if (s9 !== peg$FAILED) {
                  s10 = peg$parseMathElement();
                  if (s10 !== peg$FAILED) {
                    peg$savedPos = s8;
                    s9 = peg$c122(s4, s10);
                    s8 = s9;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$currPos;
                  s9 = peg$currPos;
                  peg$silentFails++;
                  s10 = peg$currPos;
                  s11 = peg$parseendEnv();
                  if (s11 !== peg$FAILED) {
                    s12 = peg$parsegroupedEnvname();
                    if (s12 !== peg$FAILED) {
                      peg$savedPos = peg$currPos;
                      s13 = peg$c121(s4, s12);
                      if (s13) {
                        s13 = void 0;
                      } else {
                        s13 = peg$FAILED;
                      }
                      if (s13 !== peg$FAILED) {
                        s11 = [s11, s12, s13];
                        s10 = s11;
                      } else {
                        peg$currPos = s10;
                        s10 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                  peg$silentFails--;
                  if (s10 === peg$FAILED) {
                    s9 = void 0;
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parseMathElement();
                    if (s10 !== peg$FAILED) {
                      peg$savedPos = s8;
                      s9 = peg$c122(s4, s10);
                      s8 = s9;
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseendEnv();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseskip_space();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parsebeginGroup();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parsemathEnvName();
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parseendGroup();
                          if (s12 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c123(s4, s7);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "MathEnvironment",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "MathEnvironment",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseMathAlignedEnvironment() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "MathAlignedEnvironment",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parsebeginEnv();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsebeginGroup();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsemahtAlignedEnvName();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseendGroup();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseskip_space();
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$currPos;
                s9 = peg$currPos;
                peg$silentFails++;
                s10 = peg$currPos;
                s11 = peg$parseendEnv();
                if (s11 !== peg$FAILED) {
                  s12 = peg$parsegroupedEnvname();
                  if (s12 !== peg$FAILED) {
                    peg$savedPos = peg$currPos;
                    s13 = peg$c121(s4, s12);
                    if (s13) {
                      s13 = void 0;
                    } else {
                      s13 = peg$FAILED;
                    }
                    if (s13 !== peg$FAILED) {
                      s11 = [s11, s12, s13];
                      s10 = s11;
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s10;
                  s10 = peg$FAILED;
                }
                peg$silentFails--;
                if (s10 === peg$FAILED) {
                  s9 = void 0;
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
                if (s9 !== peg$FAILED) {
                  s10 = peg$parseMathElement();
                  if (s10 !== peg$FAILED) {
                    peg$savedPos = s8;
                    s9 = peg$c122(s4, s10);
                    s8 = s9;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$currPos;
                  s9 = peg$currPos;
                  peg$silentFails++;
                  s10 = peg$currPos;
                  s11 = peg$parseendEnv();
                  if (s11 !== peg$FAILED) {
                    s12 = peg$parsegroupedEnvname();
                    if (s12 !== peg$FAILED) {
                      peg$savedPos = peg$currPos;
                      s13 = peg$c121(s4, s12);
                      if (s13) {
                        s13 = void 0;
                      } else {
                        s13 = peg$FAILED;
                      }
                      if (s13 !== peg$FAILED) {
                        s11 = [s11, s12, s13];
                        s10 = s11;
                      } else {
                        peg$currPos = s10;
                        s10 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                  peg$silentFails--;
                  if (s10 === peg$FAILED) {
                    s9 = void 0;
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parseMathElement();
                    if (s10 !== peg$FAILED) {
                      peg$savedPos = s8;
                      s9 = peg$c122(s4, s10);
                      s8 = s9;
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseendEnv();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseskip_space();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parsebeginGroup();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parsemahtAlignedEnvName();
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parseendGroup();
                          if (s12 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c124(s4, s7);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "MathAlignedEnvironment",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "MathAlignedEnvironment",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsegroupedEnvname() {
    var s0, s1, s2, s3, s4, s5, s6,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "groupedEnvname",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseskip_space();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsebeginGroup();
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = peg$currPos;
        s5 = [];
        s6 = peg$parsechar();
        if (s6 !== peg$FAILED) {
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parsechar();
          }
        } else {
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 42) {
            s6 = peg$c57;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c58); }
          }
          if (s6 === peg$FAILED) {
            s6 = null;
          }
          if (s6 !== peg$FAILED) {
            s5 = [s5, s6];
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseendGroup();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c125(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "groupedEnvname",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "groupedEnvname",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseAmsmathTextCommand() {
    var s0, s1, s2, s3,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "AmsmathTextCommand",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c126) {
        s2 = peg$c126;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c127); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseGroup();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c128(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "AmsmathTextCommand",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "AmsmathTextCommand",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsebeginDisplayMath() {
    var s0, s1, s2,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "beginDisplayMath",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 91) {
        s2 = peg$c69;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c70); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "beginDisplayMath",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "beginDisplayMath",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseendDisplayMath() {
    var s0, s1, s2,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "endDisplayMath",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 93) {
        s2 = peg$c71;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c72); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "endDisplayMath",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "endDisplayMath",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsebeginInlineMath() {
    var s0, s1, s2,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "beginInlineMath",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 40) {
        s2 = peg$c73;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c74); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "beginInlineMath",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "beginInlineMath",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseendInlineMath() {
    var s0, s1, s2,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "endInlineMath",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 41) {
        s2 = peg$c75;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c76); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "endInlineMath",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "endInlineMath",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsebeginEnv() {
    var s0, s1, s2,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "beginEnv",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 5) === peg$c130) {
        s2 = peg$c130;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c131); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "beginEnv",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "beginEnv",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseendEnv() {
    var s0, s1, s2,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "endEnv",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseescape();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c65) {
        s2 = peg$c65;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c66); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "endEnv",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "endEnv",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsemathEnvName() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "mathEnvName",
      location: peg$computeLocation(startPos, startPos)
    });
    if (input.substr(peg$currPos, 9) === peg$c132) {
      s0 = peg$c132;
      peg$currPos += 9;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c133); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 8) === peg$c134) {
        s0 = peg$c134;
        peg$currPos += 8;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c135); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 6) === peg$c136) {
          s0 = peg$c136;
          peg$currPos += 6;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c137); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 5) === peg$c138) {
            s0 = peg$c138;
            peg$currPos += 5;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c139); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 8) === peg$c140) {
              s0 = peg$c140;
              peg$currPos += 8;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c141); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 7) === peg$c142) {
                s0 = peg$c142;
                peg$currPos += 7;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c143); }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 7) === peg$c144) {
                  s0 = peg$c144;
                  peg$currPos += 7;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c145); }
                }
                if (s0 === peg$FAILED) {
                  if (input.substr(peg$currPos, 6) === peg$c146) {
                    s0 = peg$c146;
                    peg$currPos += 6;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c147); }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.substr(peg$currPos, 9) === peg$c148) {
                      s0 = peg$c148;
                      peg$currPos += 9;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c149); }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.substr(peg$currPos, 8) === peg$c150) {
                        s0 = peg$c150;
                        peg$currPos += 8;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c151); }
                      }
                      if (s0 === peg$FAILED) {
                        if (input.substr(peg$currPos, 8) === peg$c152) {
                          s0 = peg$c152;
                          peg$currPos += 8;
                        } else {
                          s0 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c153); }
                        }
                        if (s0 === peg$FAILED) {
                          if (input.substr(peg$currPos, 7) === peg$c154) {
                            s0 = peg$c154;
                            peg$currPos += 7;
                          } else {
                            s0 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c155); }
                          }
                          if (s0 === peg$FAILED) {
                            if (input.substr(peg$currPos, 4) === peg$c156) {
                              s0 = peg$c156;
                              peg$currPos += 4;
                            } else {
                              s0 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c157); }
                            }
                            if (s0 === peg$FAILED) {
                              if (input.substr(peg$currPos, 11) === peg$c158) {
                                s0 = peg$c158;
                                peg$currPos += 11;
                              } else {
                                s0 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c159); }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "mathEnvName",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "mathEnvName",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsemahtAlignedEnvName() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "mahtAlignedEnvName",
      location: peg$computeLocation(startPos, startPos)
    });
    if (input.substr(peg$currPos, 7) === peg$c160) {
      s0 = peg$c160;
      peg$currPos += 7;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c161); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 9) === peg$c162) {
        s0 = peg$c162;
        peg$currPos += 9;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c163); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 5) === peg$c164) {
          s0 = peg$c164;
          peg$currPos += 5;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c165); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 6) === peg$c166) {
            s0 = peg$c166;
            peg$currPos += 6;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c167); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 8) === peg$c168) {
              s0 = peg$c168;
              peg$currPos += 8;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c169); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 5) === peg$c170) {
                s0 = peg$c170;
                peg$currPos += 5;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c171); }
              }
            }
          }
        }
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "mahtAlignedEnvName",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "mahtAlignedEnvName",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseescape() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "escape",
      location: peg$computeLocation(startPos, startPos)
    });
    if (input.charCodeAt(peg$currPos) === 92) {
      s0 = peg$c172;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c173); }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "escape",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "escape",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsebeginGroup() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "beginGroup",
      location: peg$computeLocation(startPos, startPos)
    });
    if (input.charCodeAt(peg$currPos) === 123) {
      s0 = peg$c174;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c175); }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "beginGroup",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "beginGroup",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseendGroup() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "endGroup",
      location: peg$computeLocation(startPos, startPos)
    });
    if (input.charCodeAt(peg$currPos) === 125) {
      s0 = peg$c176;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c177); }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "endGroup",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "endGroup",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsemathShift() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "mathShift",
      location: peg$computeLocation(startPos, startPos)
    });
    if (input.charCodeAt(peg$currPos) === 36) {
      s0 = peg$c178;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c179); }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "mathShift",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "mathShift",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseAlignmentTab() {
    var s0, s1,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "AlignmentTab",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 38) {
      s1 = peg$c180;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c181); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c182();
    }
    s0 = s1;
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "AlignmentTab",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "AlignmentTab",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsecommandParameter() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "commandParameter",
      location: peg$computeLocation(startPos, startPos)
    });
    if (input.charCodeAt(peg$currPos) === 35) {
      s0 = peg$c183;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c184); }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "commandParameter",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "commandParameter",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseSuperscript() {
    var s0, s1,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Superscript",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 94) {
      s1 = peg$c185;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c186); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c187();
    }
    s0 = s1;
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Superscript",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Superscript",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseSubscript() {
    var s0, s1,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Subscript",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 95) {
      s1 = peg$c188;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c189); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c190();
    }
    s0 = s1;
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Subscript",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Subscript",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseignore() {
    var s0, s1,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "ignore",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 0) {
      s1 = peg$c191;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c192); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c193();
    }
    s0 = s1;
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "ignore",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "ignore",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsechar() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "char",
      location: peg$computeLocation(startPos, startPos)
    });
    if (peg$c194.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c195); }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "char",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "char",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsenum() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "num",
      location: peg$computeLocation(startPos, startPos)
    });
    if (peg$c196.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c197); }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "num",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "num",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseActiveCharacter() {
    var s0, s1,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "ActiveCharacter",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 126) {
      s1 = peg$c200;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c201); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c202();
    }
    s0 = s1;
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "ActiveCharacter",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "ActiveCharacter",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseCommandParameterWithNumber() {
    var s0, s1, s2, s3, s4,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "CommandParameterWithNumber",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parsecommandParameter();
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = peg$parsenum();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parsenum();
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c203(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "CommandParameterWithNumber",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "CommandParameterWithNumber",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseendDoc() {
    var s0, s1, s2, s3, s4, s5,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "endDoc",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parseendEnv();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsebeginGroup();
        if (s3 !== peg$FAILED) {
          if (input.substr(peg$currPos, 8) === peg$c204) {
            s4 = peg$c204;
            peg$currPos += 8;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c205); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseendGroup();
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "endDoc",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "endDoc",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsecomment() {
    var s0, s1, s2, s3, s4, s5, s6,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "comment",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 37) {
      s1 = peg$c12;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c13); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = peg$currPos;
      s5 = peg$currPos;
      peg$silentFails++;
      s6 = peg$parsenl();
      peg$silentFails--;
      if (s6 === peg$FAILED) {
        s5 = void 0;
      } else {
        peg$currPos = s5;
        s5 = peg$FAILED;
      }
      if (s5 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s6 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s6 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s6 !== peg$FAILED) {
          s5 = [s5, s6];
          s4 = s5;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$currPos;
        s5 = peg$currPos;
        peg$silentFails++;
        s6 = peg$parsenl();
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = void 0;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
          if (s6 !== peg$FAILED) {
            s5 = [s5, s6];
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenl();
        if (s3 === peg$FAILED) {
          s3 = peg$parseEOF();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c206(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "comment",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "comment",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsewhitespace() {
    var s0, s1, s2, s3, s4, s5,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "whitespace",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parsenl();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsesp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsesp();
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsesp();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsesp();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsenl();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsesp();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsesp();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            peg$silentFails++;
            s5 = peg$parsenl();
            peg$silentFails--;
            if (s5 === peg$FAILED) {
              s4 = void 0;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = [];
        s1 = peg$parsesp();
        if (s1 !== peg$FAILED) {
          while (s1 !== peg$FAILED) {
            s0.push(s1);
            s1 = peg$parsesp();
          }
        } else {
          s0 = peg$FAILED;
        }
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "whitespace",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "whitespace",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsenl() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "nl",
      location: peg$computeLocation(startPos, startPos)
    });
    if (input.charCodeAt(peg$currPos) === 10) {
      s0 = peg$c207;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c208); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c209) {
        s0 = peg$c209;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c210); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 13) {
          s0 = peg$c211;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c212); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 8232) {
            s0 = peg$c213;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c214); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 8233) {
              s0 = peg$c215;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c216); }
            }
          }
        }
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "nl",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "nl",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsesp() {
    var s0,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "sp",
      location: peg$computeLocation(startPos, startPos)
    });
    if (peg$c217.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c218); }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "sp",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "sp",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseskip_space() {
    var s0, s1, s2, s3,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "skip_space",
      location: peg$computeLocation(startPos, startPos)
    });
    peg$silentFails++;
    s0 = [];
    s1 = peg$currPos;
    s2 = peg$currPos;
    peg$silentFails++;
    s3 = peg$parsebreak();
    peg$silentFails--;
    if (s3 === peg$FAILED) {
      s2 = void 0;
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsenl();
      if (s3 === peg$FAILED) {
        s3 = peg$parsesp();
        if (s3 === peg$FAILED) {
          s3 = peg$parseskip_comment();
        }
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$currPos;
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsebreak();
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenl();
        if (s3 === peg$FAILED) {
          s3 = peg$parsesp();
          if (s3 === peg$FAILED) {
            s3 = peg$parseskip_comment();
          }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c219); }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "skip_space",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "skip_space",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseskip_comment() {
    var s0, s1,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "skip_comment",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = peg$parsecomment();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c220(s1);
    }
    s0 = s1;
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "skip_comment",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "skip_comment",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseskip_all_space() {
    var s0, s1, s2,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "skip_all_space",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsenl();
    if (s2 === peg$FAILED) {
      s2 = peg$parsesp();
      if (s2 === peg$FAILED) {
        s2 = peg$parseskip_comment();
      }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsenl();
      if (s2 === peg$FAILED) {
        s2 = peg$parsesp();
        if (s2 === peg$FAILED) {
          s2 = peg$parseskip_comment();
        }
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c221();
    }
    s0 = s1;
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "skip_all_space",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "skip_all_space",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parsebreak() {
    var s0, s1, s2, s3, s4, s5, s6, s7,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "break",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$parseskip_all_space();
    if (s3 !== peg$FAILED) {
      s4 = peg$parseescape();
      if (s4 !== peg$FAILED) {
        if (input.substr(peg$currPos, 3) === peg$c222) {
          s5 = peg$c222;
          peg$currPos += 3;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c223); }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$parsechar();
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            s7 = peg$parseskip_all_space();
            if (s7 !== peg$FAILED) {
              s3 = [s3, s4, s5, s6, s7];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseskip_all_space();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseescape();
          if (s4 !== peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c222) {
              s5 = peg$c222;
              peg$currPos += 3;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c223); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              peg$silentFails++;
              s7 = peg$parsechar();
              peg$silentFails--;
              if (s7 === peg$FAILED) {
                s6 = void 0;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseskip_all_space();
                if (s7 !== peg$FAILED) {
                  s3 = [s3, s4, s5, s6, s7];
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c224();
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsesp();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsesp();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parsenl();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseskip_comment();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseskip_comment();
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = [];
          s3 = peg$parseskip_comment();
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parseskip_comment();
            }
          } else {
            s2 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$parsesp();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parsesp();
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parsenl();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$currPos;
              s5 = [];
              s6 = peg$parsesp();
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parsesp();
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parsenl();
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            }
          } else {
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$parseendDoc();
            peg$silentFails--;
            if (s4 !== peg$FAILED) {
              peg$currPos = s3;
              s3 = void 0;
            } else {
              s3 = peg$FAILED;
            }
            if (s3 === peg$FAILED) {
              s3 = peg$parseEOF();
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsesp();
            if (s5 === peg$FAILED) {
              s5 = peg$parsenl();
              if (s5 === peg$FAILED) {
                s5 = peg$parseskip_comment();
              }
            }
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsesp();
              if (s5 === peg$FAILED) {
                s5 = peg$parsenl();
                if (s5 === peg$FAILED) {
                  s5 = peg$parseskip_comment();
                }
              }
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c224();
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "break",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "break",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
  function peg$parseEOF() {
    var s0, s1,
        startPos = peg$currPos;
    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "EOF",
      location: peg$computeLocation(startPos, startPos)
    });
    s0 = peg$currPos;
    peg$silentFails++;
    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    peg$silentFails--;
    if (s1 === peg$FAILED) {
      s0 = void 0;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "EOF",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "EOF",
        location: peg$computeLocation(startPos, startPos)
      });
    }
    return s0;
  }
    const timeKeeper = options.timeout;
    const commentMap = options.enableComment ? new Map() : undefined;
  peg$result = peg$startRuleFunction();
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }
    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}
var latex_parser_trace = {
  SyntaxError:   peg$SyntaxError$1,
  DefaultTracer: peg$DefaultTracer,
  parse:         peg$parse$1
};

var timeout = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeKeeper = exports.TimeoutError = void 0;
class TimeoutError extends Error {
    constructor(s) {
        super(s);
    }
}
exports.TimeoutError = TimeoutError;
class TimeKeeper {
    constructor(timeout) {
        this.timeout = timeout;
        this._start = Date.now();
    }
    check() {
        const now = Date.now();
        if ((now - this._start) > this.timeout) {
            throw new TimeoutError('could not complete parsing within the given time.');
        }
    }
}
exports.TimeKeeper = TimeKeeper;
});
unwrapExports(timeout);
var timeout_1 = timeout.TimeKeeper;
var timeout_2 = timeout.TimeoutError;

var latex_parser_types = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAstPreamble = exports.isAstRoot = exports.hasArgsArray = exports.hasContentArray = exports.hasContent = exports.isMathDelimiters = exports.isMatchingDelimiters = exports.isMathCharacter = exports.isDisplayMath = exports.isInlienMath = exports.isLstlisting = exports.isMinted = exports.isVerbatim = exports.isVerb = exports.isIgnore = exports.isActiveCharacter = exports.isCommandParameter = exports.isAlignmentTab = exports.isSubscript = exports.isSuperscript = exports.isParbreak = exports.isOptionalArg = exports.isGroup = exports.isMathEnvAligned = exports.isMathEnv = exports.isEnvironment = exports.isDefCommand = exports.isAmsMathTextCommand = exports.isCommand = exports.isTextString = void 0;
function isTextString(node) {
    return !!node && node.kind === 'text.string';
}
exports.isTextString = isTextString;
function isCommand(node) {
    return !!node && node.kind === 'command';
}
exports.isCommand = isCommand;
function isAmsMathTextCommand(node) {
    return !!node && node.kind === 'command.text';
}
exports.isAmsMathTextCommand = isAmsMathTextCommand;
function isDefCommand(node) {
    return !!node && node.kind === 'command.def';
}
exports.isDefCommand = isDefCommand;
function isEnvironment(node) {
    return !!node && node.kind === 'env';
}
exports.isEnvironment = isEnvironment;
function isMathEnv(node) {
    return !!node && node.kind === 'env.math.align';
}
exports.isMathEnv = isMathEnv;
function isMathEnvAligned(node) {
    return !!node && node.kind === 'env.math.aligned';
}
exports.isMathEnvAligned = isMathEnvAligned;
function isGroup(node) {
    return !!node && node.kind === 'arg.group';
}
exports.isGroup = isGroup;
function isOptionalArg(node) {
    return !!node && node.kind === 'arg.optional';
}
exports.isOptionalArg = isOptionalArg;
function isParbreak(node) {
    return !!node && node.kind === 'parbreak';
}
exports.isParbreak = isParbreak;
function isSuperscript(node) {
    return !!node && node.kind === 'superscript';
}
exports.isSuperscript = isSuperscript;
function isSubscript(node) {
    return !!node && node.kind === 'subscript';
}
exports.isSubscript = isSubscript;
function isAlignmentTab(node) {
    return !!node && node.kind === 'alignmentTab';
}
exports.isAlignmentTab = isAlignmentTab;
function isCommandParameter(node) {
    return !!node && node.kind === 'commandParameter';
}
exports.isCommandParameter = isCommandParameter;
function isActiveCharacter(node) {
    return !!node && node.kind === 'activeCharacter';
}
exports.isActiveCharacter = isActiveCharacter;
function isIgnore(node) {
    return !!node && node.kind === 'ignore';
}
exports.isIgnore = isIgnore;
function isVerb(node) {
    return !!node && node.kind === 'verb';
}
exports.isVerb = isVerb;
function isVerbatim(node) {
    return !!node && node.kind === 'env.verbatim';
}
exports.isVerbatim = isVerbatim;
function isMinted(node) {
    return !!node && node.kind === 'env.minted';
}
exports.isMinted = isMinted;
function isLstlisting(node) {
    return !!node && node.kind === 'env.lstlisting';
}
exports.isLstlisting = isLstlisting;
function isInlienMath(node) {
    return !!node && node.kind === 'inlineMath';
}
exports.isInlienMath = isInlienMath;
function isDisplayMath(node) {
    return !!node && node.kind === 'displayMath';
}
exports.isDisplayMath = isDisplayMath;
function isMathCharacter(node) {
    return !!node && node.kind === 'math.character';
}
exports.isMathCharacter = isMathCharacter;
function isMatchingDelimiters(node) {
    return !!node && node.kind === 'math.matching_delimiters';
}
exports.isMatchingDelimiters = isMatchingDelimiters;
function isMathDelimiters(node) {
    return !!node && node.kind === 'math.math_delimiters';
}
exports.isMathDelimiters = isMathDelimiters;
function hasContent(node) {
    return !!node && node.hasOwnProperty('content');
}
exports.hasContent = hasContent;
function hasContentArray(node) {
    return !!node && node.hasOwnProperty('content') && Array.isArray(node['content']);
}
exports.hasContentArray = hasContentArray;
function hasArgsArray(node) {
    return !!node && node.hasOwnProperty('args') && Array.isArray(node['args']);
}
exports.hasArgsArray = hasArgsArray;
function isAstRoot(ast) {
    return ast.kind === 'ast.root';
}
exports.isAstRoot = isAstRoot;
function isAstPreamble(ast) {
    return ast.kind === 'ast.preamble';
}
exports.isAstPreamble = isAstPreamble;
});
unwrapExports(latex_parser_types);
var latex_parser_types_1 = latex_parser_types.isAstPreamble;
var latex_parser_types_2 = latex_parser_types.isAstRoot;
var latex_parser_types_3 = latex_parser_types.hasArgsArray;
var latex_parser_types_4 = latex_parser_types.hasContentArray;
var latex_parser_types_5 = latex_parser_types.hasContent;
var latex_parser_types_6 = latex_parser_types.isMathDelimiters;
var latex_parser_types_7 = latex_parser_types.isMatchingDelimiters;
var latex_parser_types_8 = latex_parser_types.isMathCharacter;
var latex_parser_types_9 = latex_parser_types.isDisplayMath;
var latex_parser_types_10 = latex_parser_types.isInlienMath;
var latex_parser_types_11 = latex_parser_types.isLstlisting;
var latex_parser_types_12 = latex_parser_types.isMinted;
var latex_parser_types_13 = latex_parser_types.isVerbatim;
var latex_parser_types_14 = latex_parser_types.isVerb;
var latex_parser_types_15 = latex_parser_types.isIgnore;
var latex_parser_types_16 = latex_parser_types.isActiveCharacter;
var latex_parser_types_17 = latex_parser_types.isCommandParameter;
var latex_parser_types_18 = latex_parser_types.isAlignmentTab;
var latex_parser_types_19 = latex_parser_types.isSubscript;
var latex_parser_types_20 = latex_parser_types.isSuperscript;
var latex_parser_types_21 = latex_parser_types.isParbreak;
var latex_parser_types_22 = latex_parser_types.isOptionalArg;
var latex_parser_types_23 = latex_parser_types.isGroup;
var latex_parser_types_24 = latex_parser_types.isMathEnvAligned;
var latex_parser_types_25 = latex_parser_types.isMathEnv;
var latex_parser_types_26 = latex_parser_types.isEnvironment;
var latex_parser_types_27 = latex_parser_types.isDefCommand;
var latex_parser_types_28 = latex_parser_types.isAmsMathTextCommand;
var latex_parser_types_29 = latex_parser_types.isCommand;
var latex_parser_types_30 = latex_parser_types.isTextString;

var find_all = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNodeAt = exports.findAllSequences = exports.findAll = exports.find = exports.getChildNodes = void 0;
function getChildNodes(node) {
    let results = [];
    if (latex_parser_types.hasContentArray(node)) {
        results = results.concat(node.content);
    }
    if (latex_parser_types.hasArgsArray(node)) {
        results = results.concat(node.args);
    }
    if ('arg' in node && node.arg) {
        results = results.concat([node.arg]);
    }
    return results;
}
exports.getChildNodes = getChildNodes;
function find(nodes, typeguard = (_z) => true, parent) {
    for (const node of nodes) {
        if (typeguard(node)) {
            return { node, parent };
        }
        const cur = { node, parent };
        const childNodes = getChildNodes(node);
        if (childNodes.length > 0) {
            return find(childNodes, typeguard, cur);
        }
    }
    return undefined;
}
exports.find = find;
function findAll(nodes, typeguard = (_z) => true, parent) {
    let ret = [];
    for (const node of nodes) {
        if (typeguard(node)) {
            ret.push({ node, parent });
        }
        const cur = { node, parent };
        const childNodes = getChildNodes(node);
        if (childNodes.length > 0) {
            ret = ret.concat(findAll(childNodes, typeguard, cur));
        }
    }
    return ret;
}
exports.findAll = findAll;
function findAllSequences(nodes, typeguards, parent) {
    let ret = [];
    for (let i = 0; i < nodes.length; i++) {
        let flag = true;
        const curResult = [];
        for (let j = 0; j < typeguards.length; j++) {
            if (i + j < nodes.length) {
                const cur = nodes[i + j];
                if (typeguards[j](cur)) {
                    curResult.push(cur);
                    continue;
                }
            }
            flag = false;
            break;
        }
        if (flag) {
            ret.push({ nodes: curResult, parent });
        }
        const curNode = nodes[i];
        const cur = { node: curNode, parent };
        const childNodes = getChildNodes(curNode);
        if (childNodes.length > 0) {
            ret = ret.concat(findAllSequences(childNodes, typeguards, cur));
        }
    }
    return ret;
}
exports.findAllSequences = findAllSequences;
function findNodeAt(nodes, pos, parent) {
    for (const node of nodes) {
        const nodeLoc = node.location;
        const cur = { node, parent };
        if (nodeLoc && pos.line !== undefined && pos.column !== undefined) {
            const childNodes = getChildNodes(node);
            if (pos.line < nodeLoc.start.line || nodeLoc.end.line < pos.line) {
                continue;
            }
            if (nodeLoc.start.line === pos.line) {
                if ((pos.includeStart ? pos.column < nodeLoc.start.column : pos.column <= nodeLoc.start.column)) {
                    continue;
                }
            }
            if (nodeLoc.end.line === pos.line) {
                if ((pos.includeEnd ? nodeLoc.end.column < pos.column : nodeLoc.end.column <= pos.column)) {
                    continue;
                }
            }
            return findNodeAt(childNodes, pos, cur);
        }
        else if (nodeLoc && pos.offset !== undefined
            && (pos.includeStart ? nodeLoc.start.offset <= pos.offset : nodeLoc.start.offset < pos.offset)
            && (pos.includeEnd ? nodeLoc.end.offset >= pos.offset : nodeLoc.end.offset > pos.offset)) {
            const childNodes = getChildNodes(node);
            return findNodeAt(childNodes, pos, cur);
        }
    }
    return parent;
}
exports.findNodeAt = findNodeAt;
});
unwrapExports(find_all);
var find_all_1 = find_all.findNodeAt;
var find_all_2 = find_all.findAllSequences;
var find_all_3 = find_all.findAll;
var find_all_4 = find_all.find;
var find_all_5 = find_all.getChildNodes;

var matcher = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.pattern = void 0;
class Pattern {
    constructor(typeguard, parentPattern) {
        this.typeguard = typeguard;
        this.parentPattern = parentPattern || this.parentPattern;
    }
    child(typeguard) {
        const childMatcher = new Pattern(typeguard, this);
        return childMatcher;
    }
    match(nodes, opt = { traverseAll: false }) {
        if (!this.parentPattern) {
            if (opt.traverseAll) {
                const result = find_all.find(nodes, this.typeguard);
                if (result) {
                    return { node: result.node, parent: undefined };
                }
            }
            else {
                for (const node of nodes) {
                    if (this.typeguard(node)) {
                        return { node, parent: undefined };
                    }
                }
            }
        }
        else {
            const parentMatchResults = this.parentPattern.matchAll(nodes, opt);
            for (const parentMatchResult of parentMatchResults) {
                const parentNode = parentMatchResult.node;
                const childNodes = find_all.getChildNodes(parentNode);
                for (const node of childNodes) {
                    if (this.typeguard(node)) {
                        return { node, parent: parentMatchResult };
                    }
                }
            }
        }
        return undefined;
    }
    matchAll(nodes, opt = { traverseAll: false }) {
        const ret = [];
        if (!this.parentPattern) {
            if (opt.traverseAll) {
                const results = find_all.findAll(nodes, this.typeguard);
                for (const result of results) {
                    ret.push({ node: result.node, parent: undefined });
                }
            }
            else {
                for (const node of nodes) {
                    if (this.typeguard(node)) {
                        ret.push({ node, parent: undefined });
                    }
                }
            }
        }
        else {
            const parentMatchResults = this.parentPattern.matchAll(nodes, opt);
            for (const parentMatchResult of parentMatchResults) {
                const parentNode = parentMatchResult.node;
                const childNodes = find_all.getChildNodes(parentNode);
                for (const node of childNodes) {
                    if (this.typeguard(node)) {
                        ret.push({ node, parent: parentMatchResult });
                    }
                }
            }
        }
        return ret;
    }
}
function pattern(typeguard) {
    return new Pattern(typeguard);
}
exports.pattern = pattern;
});
unwrapExports(matcher);
var matcher_1 = matcher.pattern;

var stringify_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = void 0;
function stringifyArray(arry, options) {
    const len = arry.length;
    let ret = '';
    for (let i = 0; i < len; i++) {
        const cur = arry[i];
        ret += stringify(cur, options);
        if (latex_parser_types.isCommandParameter(cur) || latex_parser_types.isSubscript(cur) || latex_parser_types.isSuperscript(cur)) {
            continue;
        }
        if (i + 1 < len && latex_parser_types.isTextString(arry[i + 1])) {
            ret += ' ';
            continue;
        }
        if (i + 1 < len && latex_parser_types.isMathCharacter(arry[i + 1]) && !latex_parser_types.isMathCharacter(cur)) {
            ret += ' ';
            continue;
        }
        if (i + 1 < len && latex_parser_types.isCommand(cur) && cur.args.length === 0 && latex_parser_types.isCommandParameter(arry[i + 1])) {
            ret += ' ';
            continue;
        }
    }
    return ret;
}
function stringify(node, options = { lineBreak: '' }) {
    const lineBreak = options.lineBreak;
    if (Array.isArray(node)) {
        return stringifyArray(node, options);
    }
    if (latex_parser_types.isTextString(node)) {
        return node.content;
    }
    if (latex_parser_types.isCommand(node)) {
        return '\\' + node.name + stringifyArray(node.args, options);
    }
    if (latex_parser_types.isAmsMathTextCommand(node)) {
        return '\\text{' + node.arg + '}';
    }
    if (latex_parser_types.isDefCommand(node)) {
        return '\\def' + node.token + stringifyArray(node.args, options);
    }
    if (latex_parser_types.isEnvironment(node) || latex_parser_types.isMathEnv(node) || latex_parser_types.isMathEnvAligned(node)) {
        const begin = '\\begin{' + node.name + '}';
        const args = stringifyArray(node.args, options);
        const content = stringifyArray(node.content, options);
        const end = '\\end{' + node.name + '}';
        return begin + args.trim() + lineBreak + content.trim() + lineBreak + end + lineBreak;
    }
    if (latex_parser_types.isGroup(node)) {
        return '{' + stringifyArray(node.content, options) + '}';
    }
    if (latex_parser_types.isOptionalArg(node)) {
        return '[' + stringifyArray(node.content, options) + ']';
    }
    if (latex_parser_types.isParbreak(node)) {
        return '\\par' + lineBreak;
    }
    if (latex_parser_types.isSuperscript(node)) {
        if (node.arg) {
            return '^' + stringify(node.arg, options);
        }
        else {
            return '^';
        }
    }
    if (latex_parser_types.isSubscript(node)) {
        if (node.arg) {
            return '_' + stringify(node.arg, options);
        }
        else {
            return '_';
        }
    }
    if (latex_parser_types.isAlignmentTab(node)) {
        return '&';
    }
    if (latex_parser_types.isCommandParameter(node)) {
        return '#' + node.nargs;
    }
    if (latex_parser_types.isActiveCharacter(node)) {
        return '~';
    }
    if (latex_parser_types.isIgnore(node)) {
        return '';
    }
    if (latex_parser_types.isVerb(node)) {
        return '\\verb' + node.escape + node.content + node.escape;
    }
    if (latex_parser_types.isVerbatim(node)) {
        return '\\begin{verbatim}' + node.content + '\\end{verbatim}' + lineBreak;
    }
    if (latex_parser_types.isMinted(node)) {
        const args = stringify(node.args);
        return '\\begin{minted}' + args + node.content + '\\end{minted}' + lineBreak;
    }
    if (latex_parser_types.isLstlisting(node)) {
        const arg = node.arg ? stringify(node.arg) : '';
        return '\\begin{lstlisting}' + arg + node.content + '\\end{lstlisting}';
    }
    if (latex_parser_types.isInlienMath(node)) {
        return '$' + stringifyArray(node.content, options) + '$';
    }
    if (latex_parser_types.isDisplayMath(node)) {
        return '\\[' + lineBreak + stringifyArray(node.content, options).trim() + lineBreak + '\\]' + lineBreak;
    }
    if (latex_parser_types.isMathCharacter(node)) {
        return node.content;
    }
    if (latex_parser_types.isMatchingDelimiters(node)) {
        return '\\left' + node.left + stringifyArray(node.content, options) + '\\right' + node.right;
    }
    if (latex_parser_types.isMathDelimiters(node)) {
        return node.lcommand + node.left + stringifyArray(node.content, options) + node.rcommand + node.right;
    }
    const dummy = node;
    return dummy;
}
exports.stringify = stringify;
});
unwrapExports(stringify_1);
var stringify_2 = stringify_1.stringify;

var pegjs_types = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSyntaxError = exports.SyntaxError = exports.SyntaxErrorBase = exports.isLocation = void 0;
function isLocation(x) {
    var _a, _b, _c, _d, _e, _f;
    const ret = ((_a = x === null || x === void 0 ? void 0 : x.start) === null || _a === void 0 ? void 0 : _a.offset) !== undefined &&
        ((_b = x === null || x === void 0 ? void 0 : x.start) === null || _b === void 0 ? void 0 : _b.line) !== undefined &&
        ((_c = x === null || x === void 0 ? void 0 : x.start) === null || _c === void 0 ? void 0 : _c.column) !== undefined &&
        ((_d = x === null || x === void 0 ? void 0 : x.end) === null || _d === void 0 ? void 0 : _d.offset) !== undefined &&
        ((_e = x === null || x === void 0 ? void 0 : x.end) === null || _e === void 0 ? void 0 : _e.line) !== undefined &&
        ((_f = x === null || x === void 0 ? void 0 : x.end) === null || _f === void 0 ? void 0 : _f.column) !== undefined;
    return ret;
}
exports.isLocation = isLocation;
class SyntaxErrorBase extends Error {
}
exports.SyntaxErrorBase = SyntaxErrorBase;
class SyntaxError extends SyntaxErrorBase {
}
exports.SyntaxError = SyntaxError;
function isSyntaxError(x) {
    const ret = (x === null || x === void 0 ? void 0 : x.message) !== undefined && isLocation(x === null || x === void 0 ? void 0 : x.location) && (x === null || x === void 0 ? void 0 : x.name) === 'SyntaxError' && x instanceof Error;
    return ret;
}
exports.isSyntaxError = isSyntaxError;
});
unwrapExports(pegjs_types);
var pegjs_types_1 = pegjs_types.isSyntaxError;
var pegjs_types_2 = pegjs_types.SyntaxError;
var pegjs_types_3 = pegjs_types.SyntaxErrorBase;
var pegjs_types_4 = pegjs_types.isLocation;

var latex_parser = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePreamble = exports.parse = void 0;
Object.defineProperty(exports, "find", { enumerable: true, get: function () { return find_all.find; } });
Object.defineProperty(exports, "findAll", { enumerable: true, get: function () { return find_all.findAll; } });
Object.defineProperty(exports, "findAllSequences", { enumerable: true, get: function () { return find_all.findAllSequences; } });
Object.defineProperty(exports, "findNodeAt", { enumerable: true, get: function () { return find_all.findNodeAt; } });
Object.defineProperty(exports, "pattern", { enumerable: true, get: function () { return matcher.pattern; } });
Object.defineProperty(exports, "stringify", { enumerable: true, get: function () { return stringify_1.stringify; } });
__exportStar(latex_parser_types, exports);
Object.defineProperty(exports, "isSyntaxError", { enumerable: true, get: function () { return pegjs_types.isSyntaxError; } });
Object.defineProperty(exports, "SyntaxError", { enumerable: true, get: function () { return pegjs_types.SyntaxError; } });
function parse(s, _option) {
    const option = _option ? Object.assign({}, _option) : undefined;
    if (option && option.timeout) {
        if (typeof option.timeout !== 'object') {
            option.timeout = new timeout.TimeKeeper(option.timeout);
        }
    }
    if (option && option.tracer) {
        return latex_parser_trace.parse(s, option);
    }
    else {
        return latex_parser_simple.parse(s, option);
    }
}
exports.parse = parse;
function parsePreamble(s, option) {
    const timeout = option && option.timeout;
    return parse(s, { startRule: 'Preamble', timeout });
}
exports.parsePreamble = parsePreamble;
});
unwrapExports(latex_parser);
var latex_parser_1 = latex_parser.parsePreamble;
var latex_parser_2 = latex_parser.parse;

function peg$subclass$2(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}
function peg$SyntaxError$2(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError$2);
  }
}
peg$subclass$2(peg$SyntaxError$2, Error);
peg$SyntaxError$2.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },
        "class": function(expectation) {
          var escapedParts = "",
              i;
          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }
          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },
        any: function(expectation) {
          return "any character";
        },
        end: function(expectation) {
          return "end of input";
        },
        other: function(expectation) {
          return expectation.description;
        }
      };
  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }
  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }
  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }
  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }
  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;
    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }
    descriptions.sort();
    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }
    switch (descriptions.length) {
      case 1:
        return descriptions[0];
      case 2:
        return descriptions[0] + " or " + descriptions[1];
      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }
  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }
  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};
function peg$parse$2(input, options) {
  options = options !== void 0 ? options : {};
  var peg$FAILED = {},
      peg$startRuleFunctions = { Root: peg$parseRoot },
      peg$startRuleFunction  = peg$parseRoot,
      peg$c0 = function(content) {
            return { content };
        },
      peg$c1 = "@comment",
      peg$c2 = peg$literalExpectation("@comment", true),
      peg$c3 = "{",
      peg$c4 = peg$literalExpectation("{", false),
      peg$c5 = /^[^}]/,
      peg$c6 = peg$classExpectation(["}"], true, false),
      peg$c7 = "}",
      peg$c8 = peg$literalExpectation("}", false),
      peg$c9 = "(",
      peg$c10 = peg$literalExpectation("(", false),
      peg$c11 = ")",
      peg$c12 = peg$literalExpectation(")", false),
      peg$c13 = /^[^@]/,
      peg$c14 = peg$classExpectation(["@"], true, false),
      peg$c15 = function(x) {
            timeKeeper && timeKeeper.check();
            return x;
        },
      peg$c16 = function(entryType, internalKey, fields) {
            return { entryType, content: fields || [], internalKey: internalKey || undefined, location: location() };
        },
      peg$c17 = "@string",
      peg$c18 = peg$literalExpectation("@string", true),
      peg$c19 = "=",
      peg$c20 = peg$literalExpectation("=", false),
      peg$c21 = function(name, value) {
            return { entryType: 'string', abbreviation: name, value, location: location() };
        },
      peg$c22 = "@preamble",
      peg$c23 = peg$literalExpectation("@preamble", true),
      peg$c24 = function(content) {
            return { entryType: 'preamble', content, location: location() };
        },
      peg$c25 = "@",
      peg$c26 = peg$literalExpectation("@", false),
      peg$c27 = /^[a-zA-Z]/,
      peg$c28 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false),
      peg$c29 = function(type) {
            return type.toLowerCase();
        },
      peg$c30 = ",",
      peg$c31 = peg$literalExpectation(",", false),
      peg$c32 = function() {
            return undefined;
        },
      peg$c33 = function(name) {
            return name;
        },
      peg$c34 = function(begin, x) { return x; },
      peg$c35 = function(begin, fields) {
            return [begin].concat(fields);
        },
      peg$c36 = function(name, value) {
            return { name, value, location: location() };
        },
      peg$c37 = "#",
      peg$c38 = peg$literalExpectation("#", false),
      peg$c39 = function(begin, rest) {
            return { kind: 'concat', content: [begin].concat(rest), location: location() };
        },
      peg$c40 = "\\{",
      peg$c41 = peg$literalExpectation("\\{", false),
      peg$c42 = "\\}",
      peg$c43 = peg$literalExpectation("\\}", false),
      peg$c44 = function(content) {
            return { kind: 'text_string', content, location: location() };
        },
      peg$c45 = "\"",
      peg$c46 = peg$literalExpectation("\"", false),
      peg$c47 = /^[^"]/,
      peg$c48 = peg$classExpectation(["\""], true, false),
      peg$c49 = function(content) {
            return { kind: 'abbreviation', content, location: location() };
        },
      peg$c50 = /^[\-0-9]/,
      peg$c51 = peg$classExpectation(["-", ["0", "9"]], false, false),
      peg$c52 = function(content) {
            return { kind: 'number', content, location: location() };
        },
      peg$c53 = /^[a-zA-Z0-9_:\-]/,
      peg$c54 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_", ":", "-"], false, false),
      peg$c55 = function(n) {
            return n.toLowerCase();
        },
      peg$c56 = /^[^@={}", \t\r\n]/,
      peg$c57 = peg$classExpectation(["@", "=", "{", "}", "\"", ",", " ", "\t", "\r", "\n"], true, false),
      peg$c58 = "\r\n",
      peg$c59 = peg$literalExpectation("\r\n", false),
      peg$c60 = /^[ \t\n]/,
      peg$c61 = peg$classExpectation([" ", "\t", "\n"], false, false),
      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,
      peg$result;
  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }
    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }
  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }
  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }
  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }
  function peg$endExpectation() {
    return { type: "end" };
  }
  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;
    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }
      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };
      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }
        p++;
      }
      peg$posDetailsCache[pos] = details;
      return details;
    }
  }
  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }
  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }
    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }
    peg$maxFailExpected.push(expected);
  }
  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError$2(
      peg$SyntaxError$2.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }
  function peg$parseRoot() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseEachEntry();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseEachEntry();
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseComment();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseComment();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseComment() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 8).toLowerCase() === peg$c1) {
      s1 = input.substr(peg$currPos, 8);
      peg$currPos += 8;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c2); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 123) {
          s3 = peg$c3;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseQuotedValue();
          if (s5 === peg$FAILED) {
            s5 = peg$parseCurlyBracketValue();
            if (s5 === peg$FAILED) {
              if (peg$c5.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c6); }
              }
            }
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseQuotedValue();
            if (s5 === peg$FAILED) {
              s5 = peg$parseCurlyBracketValue();
              if (s5 === peg$FAILED) {
                if (peg$c5.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c6); }
                }
              }
            }
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 125) {
              s5 = peg$c7;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c8); }
            }
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8).toLowerCase() === peg$c1) {
        s1 = input.substr(peg$currPos, 8);
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c2); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c9;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parseQuotedValue();
            if (s5 === peg$FAILED) {
              s5 = peg$parseCurlyBracketValue();
              if (s5 === peg$FAILED) {
                if (peg$c5.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c6); }
                }
              }
            }
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parseQuotedValue();
              if (s5 === peg$FAILED) {
                s5 = peg$parseCurlyBracketValue();
                if (s5 === peg$FAILED) {
                  if (peg$c5.test(input.charAt(peg$currPos))) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c6); }
                  }
                }
              }
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c11;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c12); }
              }
              if (s5 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseQuotedValue();
        if (s0 === peg$FAILED) {
          s0 = peg$parseCurlyBracketValue();
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$currPos;
            peg$silentFails++;
            s2 = peg$parseEntry();
            peg$silentFails--;
            if (s2 === peg$FAILED) {
              s1 = void 0;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
            if (s1 !== peg$FAILED) {
              if (peg$c13.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c14); }
              }
              if (s2 !== peg$FAILED) {
                s1 = [s1, s2];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parseEachEntry() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$parseEntry();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c15(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseComment();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseComment();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEntry();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse__();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c15(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseEntry() {
    var s0;
    s0 = peg$parseStringEntry();
    if (s0 === peg$FAILED) {
      s0 = peg$parsePreambleEntry();
      if (s0 === peg$FAILED) {
        s0 = peg$parseBasicEntry();
      }
    }
    return s0;
  }
  function peg$parseBasicEntry() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
    s0 = peg$currPos;
    s1 = peg$parseEntryType();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 123) {
          s3 = peg$c3;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseInternalKey();
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseFieldArray();
                if (s7 === peg$FAILED) {
                  s7 = null;
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse__();
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s9 = peg$c7;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c8); }
                    }
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c16(s1, s5, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseEntryType();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c9;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse__();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseInternalKey();
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse__();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseFieldArray();
                  if (s7 === peg$FAILED) {
                    s7 = null;
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse__();
                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 41) {
                        s9 = peg$c11;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c12); }
                      }
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c16(s1, s5, s7);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseStringEntry() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 7).toLowerCase() === peg$c17) {
      s1 = input.substr(peg$currPos, 7);
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c18); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 123) {
          s3 = peg$c3;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseAbbreviationName();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 61) {
                  s7 = peg$c19;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c20); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse__();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseConcat();
                    if (s9 === peg$FAILED) {
                      s9 = peg$parseCurlyBracketValue();
                      if (s9 === peg$FAILED) {
                        s9 = peg$parseQuotedValue();
                        if (s9 === peg$FAILED) {
                          s9 = peg$parseNumber();
                        }
                      }
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse__();
                      if (s10 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 125) {
                          s11 = peg$c7;
                          peg$currPos++;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c8); }
                        }
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c21(s5, s9);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7).toLowerCase() === peg$c17) {
        s1 = input.substr(peg$currPos, 7);
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c18); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c9;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse__();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseAbbreviationName();
              if (s5 !== peg$FAILED) {
                s6 = peg$parse__();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 61) {
                    s7 = peg$c19;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c20); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse__();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseConcat();
                      if (s9 === peg$FAILED) {
                        s9 = peg$parseCurlyBracketValue();
                        if (s9 === peg$FAILED) {
                          s9 = peg$parseQuotedValue();
                          if (s9 === peg$FAILED) {
                            s9 = peg$parseNumber();
                          }
                        }
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse__();
                        if (s10 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 41) {
                            s11 = peg$c11;
                            peg$currPos++;
                          } else {
                            s11 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c12); }
                          }
                          if (s11 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c21(s5, s9);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parsePreambleEntry() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 9).toLowerCase() === peg$c22) {
      s1 = input.substr(peg$currPos, 9);
      peg$currPos += 9;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c23); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 123) {
          s3 = peg$c3;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseConcat();
            if (s5 === peg$FAILED) {
              s5 = peg$parseCurlyBracketValue();
              if (s5 === peg$FAILED) {
                s5 = peg$parseQuotedValue();
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s7 = peg$c7;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c8); }
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c24(s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9).toLowerCase() === peg$c22) {
        s1 = input.substr(peg$currPos, 9);
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c9;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse__();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseConcat();
              if (s5 === peg$FAILED) {
                s5 = peg$parseCurlyBracketValue();
                if (s5 === peg$FAILED) {
                  s5 = peg$parseQuotedValue();
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse__();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s7 = peg$c11;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c12); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c24(s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseEntryType() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 64) {
      s1 = peg$c25;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c26); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (peg$c27.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c28); }
      }
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$c27.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c28); }
          }
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c29(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseInternalKey() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 44) {
      s1 = peg$c30;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c31); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c32();
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c30;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c31); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c33(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseFieldArray() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    s1 = peg$parseField();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      if (s4 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s5 = peg$c30;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c31); }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseField();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c34(s1, s7);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse__();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c30;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c31); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse__();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseField();
              if (s7 !== peg$FAILED) {
                peg$savedPos = s3;
                s4 = peg$c34(s1, s7);
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c30;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c31); }
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c35(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseField() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseNameToLowerCase();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c19;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c20); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseConcat();
            if (s5 === peg$FAILED) {
              s5 = peg$parseCurlyBracketValue();
              if (s5 === peg$FAILED) {
                s5 = peg$parseQuotedValue();
                if (s5 === peg$FAILED) {
                  s5 = peg$parseNumber();
                  if (s5 === peg$FAILED) {
                    s5 = peg$parseAbbreviation();
                  }
                }
              }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c36(s1, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseConcat() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    s1 = peg$parseConcatElement();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      if (s4 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 35) {
          s5 = peg$c37;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c38); }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseConcatElement();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c34(s1, s7);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 35) {
              s5 = peg$c37;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c38); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseConcatElement();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s3;
                  s4 = peg$c34(s1, s7);
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c39(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseConcatElement() {
    var s0;
    s0 = peg$parseCurlyBracketValue();
    if (s0 === peg$FAILED) {
      s0 = peg$parseQuotedValue();
      if (s0 === peg$FAILED) {
        s0 = peg$parseNumber();
        if (s0 === peg$FAILED) {
          s0 = peg$parseAbbreviation();
        }
      }
    }
    return s0;
  }
  function peg$parseCurlyBracketValue() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (input.substr(peg$currPos, 2) === peg$c40) {
        s4 = peg$c40;
        peg$currPos += 2;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c41); }
      }
      if (s4 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c42) {
          s4 = peg$c42;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c43); }
        }
        if (s4 === peg$FAILED) {
          s4 = peg$parseCurlyBracketValue();
          if (s4 === peg$FAILED) {
            if (peg$c5.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
          }
        }
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        if (input.substr(peg$currPos, 2) === peg$c40) {
          s4 = peg$c40;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c41); }
        }
        if (s4 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c42) {
            s4 = peg$c42;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c43); }
          }
          if (s4 === peg$FAILED) {
            s4 = peg$parseCurlyBracketValue();
            if (s4 === peg$FAILED) {
              if (peg$c5.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c6); }
              }
            }
          }
        }
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 125) {
          s3 = peg$c7;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c8); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c44(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseQuotedValue() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c45;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c46); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (input.substr(peg$currPos, 2) === peg$c40) {
        s4 = peg$c40;
        peg$currPos += 2;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c41); }
      }
      if (s4 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c42) {
          s4 = peg$c42;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c43); }
        }
        if (s4 === peg$FAILED) {
          s4 = peg$parseCurlyBracketValue();
          if (s4 === peg$FAILED) {
            if (peg$c47.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c48); }
            }
          }
        }
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        if (input.substr(peg$currPos, 2) === peg$c40) {
          s4 = peg$c40;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c41); }
        }
        if (s4 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c42) {
            s4 = peg$c42;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c43); }
          }
          if (s4 === peg$FAILED) {
            s4 = peg$parseCurlyBracketValue();
            if (s4 === peg$FAILED) {
              if (peg$c47.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c48); }
              }
            }
          }
        }
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c45;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c44(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseAbbreviation() {
    var s0, s1;
    s0 = peg$currPos;
    s1 = peg$parseAbbreviationName();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c49(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseNumber() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    if (peg$c50.test(input.charAt(peg$currPos))) {
      s3 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s3 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c51); }
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        if (peg$c50.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c51); }
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c52(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseAbbreviationName() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c53.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c54); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c53.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c54); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    return s0;
  }
  function peg$parseNameToLowerCase() {
    var s0, s1;
    s0 = peg$currPos;
    s1 = peg$parseName();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c55(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseName() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c56.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c57); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c56.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c57); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    return s0;
  }
  function peg$parse__() {
    var s0, s1;
    s0 = [];
    if (input.substr(peg$currPos, 2) === peg$c58) {
      s1 = peg$c58;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c59); }
    }
    if (s1 === peg$FAILED) {
      if (peg$c60.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c61); }
      }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      if (input.substr(peg$currPos, 2) === peg$c58) {
        s1 = peg$c58;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c59); }
      }
      if (s1 === peg$FAILED) {
        if (peg$c60.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c61); }
        }
      }
    }
    return s0;
  }
    const timeKeeper = options.timeout;
  peg$result = peg$startRuleFunction();
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }
    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}
var bibtex_parser_simple = {
  SyntaxError: peg$SyntaxError$2,
  parse:       peg$parse$2
};

function peg$subclass$3(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}
function peg$SyntaxError$3(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError$3);
  }
}
peg$subclass$3(peg$SyntaxError$3, Error);
peg$SyntaxError$3.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },
        "class": function(expectation) {
          var escapedParts = "",
              i;
          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }
          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },
        any: function(expectation) {
          return "any character";
        },
        end: function(expectation) {
          return "end of input";
        },
        other: function(expectation) {
          return expectation.description;
        }
      };
  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }
  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }
  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }
  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }
  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;
    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }
    descriptions.sort();
    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }
    switch (descriptions.length) {
      case 1:
        return descriptions[0];
      case 2:
        return descriptions[0] + " or " + descriptions[1];
      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }
  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }
  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};
function peg$parse$3(input, options) {
  options = options !== void 0 ? options : {};
  var peg$FAILED = {},
      peg$startRuleFunctions = { Root: peg$parseRoot },
      peg$startRuleFunction  = peg$parseRoot,
      peg$c0 = function(content) {
            return { content };
        },
      peg$c1 = "@comment",
      peg$c2 = peg$literalExpectation("@comment", true),
      peg$c3 = "{",
      peg$c4 = peg$literalExpectation("{", false),
      peg$c5 = /^[^}]/,
      peg$c6 = peg$classExpectation(["}"], true, false),
      peg$c7 = "}",
      peg$c8 = peg$literalExpectation("}", false),
      peg$c9 = "(",
      peg$c10 = peg$literalExpectation("(", false),
      peg$c11 = ")",
      peg$c12 = peg$literalExpectation(")", false),
      peg$c13 = /^[^@]/,
      peg$c14 = peg$classExpectation(["@"], true, false),
      peg$c15 = function(x) {
            timeKeeper && timeKeeper.check();
            return x;
        },
      peg$c16 = function(entryType, internalKey, fields) {
            return { entryType, content: fields || [], internalKey: internalKey || undefined, location: location() };
        },
      peg$c17 = "@string",
      peg$c18 = peg$literalExpectation("@string", true),
      peg$c19 = "=",
      peg$c20 = peg$literalExpectation("=", false),
      peg$c21 = function(name, value) {
            return { entryType: 'string', abbreviation: name, value, location: location() };
        },
      peg$c22 = "@preamble",
      peg$c23 = peg$literalExpectation("@preamble", true),
      peg$c24 = function(content) {
            return { entryType: 'preamble', content, location: location() };
        },
      peg$c25 = "@",
      peg$c26 = peg$literalExpectation("@", false),
      peg$c27 = /^[a-zA-Z]/,
      peg$c28 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false),
      peg$c29 = function(type) {
            return type.toLowerCase();
        },
      peg$c30 = ",",
      peg$c31 = peg$literalExpectation(",", false),
      peg$c32 = function() {
            return undefined;
        },
      peg$c33 = function(name) {
            return name;
        },
      peg$c34 = function(begin, x) { return x; },
      peg$c35 = function(begin, fields) {
            return [begin].concat(fields);
        },
      peg$c36 = function(name, value) {
            return { name, value, location: location() };
        },
      peg$c37 = "#",
      peg$c38 = peg$literalExpectation("#", false),
      peg$c39 = function(begin, rest) {
            return { kind: 'concat', content: [begin].concat(rest), location: location() };
        },
      peg$c40 = "\\{",
      peg$c41 = peg$literalExpectation("\\{", false),
      peg$c42 = "\\}",
      peg$c43 = peg$literalExpectation("\\}", false),
      peg$c44 = function(content) {
            return { kind: 'text_string', content, location: location() };
        },
      peg$c45 = "\"",
      peg$c46 = peg$literalExpectation("\"", false),
      peg$c47 = /^[^"]/,
      peg$c48 = peg$classExpectation(["\""], true, false),
      peg$c49 = function(content) {
            return { kind: 'abbreviation', content, location: location() };
        },
      peg$c50 = /^[\-0-9]/,
      peg$c51 = peg$classExpectation(["-", ["0", "9"]], false, false),
      peg$c52 = function(content) {
            return { kind: 'number', content, location: location() };
        },
      peg$c53 = /^[a-zA-Z0-9_:\-]/,
      peg$c54 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_", ":", "-"], false, false),
      peg$c55 = function(n) {
            return n.toLowerCase();
        },
      peg$c56 = /^[^@={}", \t\r\n]/,
      peg$c57 = peg$classExpectation(["@", "=", "{", "}", "\"", ",", " ", "\t", "\r", "\n"], true, false),
      peg$c58 = "\r\n",
      peg$c59 = peg$literalExpectation("\r\n", false),
      peg$c60 = /^[ \t\n]/,
      peg$c61 = peg$classExpectation([" ", "\t", "\n"], false, false),
      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,
      peg$result;
  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }
    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }
  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }
  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }
  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }
  function peg$endExpectation() {
    return { type: "end" };
  }
  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;
    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }
      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };
      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }
        p++;
      }
      peg$posDetailsCache[pos] = details;
      return details;
    }
  }
  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }
  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }
    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }
    peg$maxFailExpected.push(expected);
  }
  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError$3(
      peg$SyntaxError$3.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }
  function peg$parseRoot() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseEachEntry();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseEachEntry();
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseComment();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseComment();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseComment() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 8).toLowerCase() === peg$c1) {
      s1 = input.substr(peg$currPos, 8);
      peg$currPos += 8;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c2); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 123) {
          s3 = peg$c3;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseQuotedValue();
          if (s5 === peg$FAILED) {
            s5 = peg$parseCurlyBracketValue();
            if (s5 === peg$FAILED) {
              if (peg$c5.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c6); }
              }
            }
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseQuotedValue();
            if (s5 === peg$FAILED) {
              s5 = peg$parseCurlyBracketValue();
              if (s5 === peg$FAILED) {
                if (peg$c5.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c6); }
                }
              }
            }
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 125) {
              s5 = peg$c7;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c8); }
            }
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8).toLowerCase() === peg$c1) {
        s1 = input.substr(peg$currPos, 8);
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c2); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c9;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parseQuotedValue();
            if (s5 === peg$FAILED) {
              s5 = peg$parseCurlyBracketValue();
              if (s5 === peg$FAILED) {
                if (peg$c5.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c6); }
                }
              }
            }
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parseQuotedValue();
              if (s5 === peg$FAILED) {
                s5 = peg$parseCurlyBracketValue();
                if (s5 === peg$FAILED) {
                  if (peg$c5.test(input.charAt(peg$currPos))) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c6); }
                  }
                }
              }
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c11;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c12); }
              }
              if (s5 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseQuotedValue();
        if (s0 === peg$FAILED) {
          s0 = peg$parseCurlyBracketValue();
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$currPos;
            peg$silentFails++;
            s2 = peg$parseEntry();
            peg$silentFails--;
            if (s2 === peg$FAILED) {
              s1 = void 0;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
            if (s1 !== peg$FAILED) {
              if (peg$c13.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c14); }
              }
              if (s2 !== peg$FAILED) {
                s1 = [s1, s2];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parseEachEntry() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$parseEntry();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c15(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseComment();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseComment();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEntry();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse__();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c15(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseEntry() {
    var s0;
    s0 = peg$parseStringEntry();
    if (s0 === peg$FAILED) {
      s0 = peg$parsePreambleEntry();
      if (s0 === peg$FAILED) {
        s0 = peg$parseBasicEntry();
      }
    }
    return s0;
  }
  function peg$parseBasicEntry() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
    s0 = peg$currPos;
    s1 = peg$parseEntryType();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 123) {
          s3 = peg$c3;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseInternalKey();
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseFieldArray();
                if (s7 === peg$FAILED) {
                  s7 = null;
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse__();
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s9 = peg$c7;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c8); }
                    }
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c16(s1, s5, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseEntryType();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c9;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse__();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseInternalKey();
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse__();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseFieldArray();
                  if (s7 === peg$FAILED) {
                    s7 = null;
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse__();
                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 41) {
                        s9 = peg$c11;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c12); }
                      }
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c16(s1, s5, s7);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseStringEntry() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 7).toLowerCase() === peg$c17) {
      s1 = input.substr(peg$currPos, 7);
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c18); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 123) {
          s3 = peg$c3;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseAbbreviationName();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 61) {
                  s7 = peg$c19;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c20); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse__();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseConcat();
                    if (s9 === peg$FAILED) {
                      s9 = peg$parseCurlyBracketValue();
                      if (s9 === peg$FAILED) {
                        s9 = peg$parseQuotedValue();
                        if (s9 === peg$FAILED) {
                          s9 = peg$parseNumber();
                        }
                      }
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse__();
                      if (s10 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 125) {
                          s11 = peg$c7;
                          peg$currPos++;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c8); }
                        }
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c21(s5, s9);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7).toLowerCase() === peg$c17) {
        s1 = input.substr(peg$currPos, 7);
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c18); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c9;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse__();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseAbbreviationName();
              if (s5 !== peg$FAILED) {
                s6 = peg$parse__();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 61) {
                    s7 = peg$c19;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c20); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse__();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseConcat();
                      if (s9 === peg$FAILED) {
                        s9 = peg$parseCurlyBracketValue();
                        if (s9 === peg$FAILED) {
                          s9 = peg$parseQuotedValue();
                          if (s9 === peg$FAILED) {
                            s9 = peg$parseNumber();
                          }
                        }
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse__();
                        if (s10 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 41) {
                            s11 = peg$c11;
                            peg$currPos++;
                          } else {
                            s11 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c12); }
                          }
                          if (s11 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c21(s5, s9);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parsePreambleEntry() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 9).toLowerCase() === peg$c22) {
      s1 = input.substr(peg$currPos, 9);
      peg$currPos += 9;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c23); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 123) {
          s3 = peg$c3;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseConcat();
            if (s5 === peg$FAILED) {
              s5 = peg$parseCurlyBracketValue();
              if (s5 === peg$FAILED) {
                s5 = peg$parseQuotedValue();
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s7 = peg$c7;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c8); }
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c24(s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9).toLowerCase() === peg$c22) {
        s1 = input.substr(peg$currPos, 9);
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c9;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse__();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseConcat();
              if (s5 === peg$FAILED) {
                s5 = peg$parseCurlyBracketValue();
                if (s5 === peg$FAILED) {
                  s5 = peg$parseQuotedValue();
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse__();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s7 = peg$c11;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c12); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c24(s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseEntryType() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 64) {
      s1 = peg$c25;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c26); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (peg$c27.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c28); }
      }
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$c27.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c28); }
          }
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c29(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseInternalKey() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 44) {
      s1 = peg$c30;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c31); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c32();
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c30;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c31); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c33(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseFieldArray() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    s1 = peg$parseField();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      if (s4 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s5 = peg$c30;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c31); }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseField();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c34(s1, s7);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse__();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c30;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c31); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse__();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseField();
              if (s7 !== peg$FAILED) {
                peg$savedPos = s3;
                s4 = peg$c34(s1, s7);
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c30;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c31); }
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c35(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseField() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseNameToLowerCase();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c19;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c20); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseConcat();
            if (s5 === peg$FAILED) {
              s5 = peg$parseCurlyBracketValue();
              if (s5 === peg$FAILED) {
                s5 = peg$parseQuotedValue();
                if (s5 === peg$FAILED) {
                  s5 = peg$parseNumber();
                  if (s5 === peg$FAILED) {
                    s5 = peg$parseAbbreviation();
                  }
                }
              }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c36(s1, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseConcat() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    s1 = peg$parseConcatElement();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      if (s4 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 35) {
          s5 = peg$c37;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c38); }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseConcatElement();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c34(s1, s7);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 35) {
              s5 = peg$c37;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c38); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseConcatElement();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s3;
                  s4 = peg$c34(s1, s7);
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c39(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseConcatElement() {
    var s0;
    s0 = peg$parseCurlyBracketValue();
    if (s0 === peg$FAILED) {
      s0 = peg$parseQuotedValue();
      if (s0 === peg$FAILED) {
        s0 = peg$parseNumber();
        if (s0 === peg$FAILED) {
          s0 = peg$parseAbbreviation();
        }
      }
    }
    return s0;
  }
  function peg$parseCurlyBracketValue() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (input.substr(peg$currPos, 2) === peg$c40) {
        s4 = peg$c40;
        peg$currPos += 2;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c41); }
      }
      if (s4 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c42) {
          s4 = peg$c42;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c43); }
        }
        if (s4 === peg$FAILED) {
          s4 = peg$parseCurlyBracketValue();
          if (s4 === peg$FAILED) {
            if (peg$c5.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
          }
        }
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        if (input.substr(peg$currPos, 2) === peg$c40) {
          s4 = peg$c40;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c41); }
        }
        if (s4 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c42) {
            s4 = peg$c42;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c43); }
          }
          if (s4 === peg$FAILED) {
            s4 = peg$parseCurlyBracketValue();
            if (s4 === peg$FAILED) {
              if (peg$c5.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c6); }
              }
            }
          }
        }
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 125) {
          s3 = peg$c7;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c8); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c44(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseQuotedValue() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c45;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c46); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (input.substr(peg$currPos, 2) === peg$c40) {
        s4 = peg$c40;
        peg$currPos += 2;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c41); }
      }
      if (s4 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c42) {
          s4 = peg$c42;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c43); }
        }
        if (s4 === peg$FAILED) {
          s4 = peg$parseCurlyBracketValue();
          if (s4 === peg$FAILED) {
            if (peg$c47.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c48); }
            }
          }
        }
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        if (input.substr(peg$currPos, 2) === peg$c40) {
          s4 = peg$c40;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c41); }
        }
        if (s4 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c42) {
            s4 = peg$c42;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c43); }
          }
          if (s4 === peg$FAILED) {
            s4 = peg$parseCurlyBracketValue();
            if (s4 === peg$FAILED) {
              if (peg$c47.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c48); }
              }
            }
          }
        }
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c45;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c44(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseAbbreviation() {
    var s0, s1;
    s0 = peg$currPos;
    s1 = peg$parseAbbreviationName();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c49(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseNumber() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    if (peg$c50.test(input.charAt(peg$currPos))) {
      s3 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s3 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c51); }
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        if (peg$c50.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c51); }
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c52(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseAbbreviationName() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c53.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c54); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c53.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c54); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    return s0;
  }
  function peg$parseNameToLowerCase() {
    var s0, s1;
    s0 = peg$currPos;
    s1 = peg$parseName();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c55(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseName() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c56.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c57); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c56.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c57); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    return s0;
  }
  function peg$parse__() {
    var s0, s1;
    s0 = [];
    if (input.substr(peg$currPos, 2) === peg$c58) {
      s1 = peg$c58;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c59); }
    }
    if (s1 === peg$FAILED) {
      if (peg$c60.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c61); }
      }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      if (input.substr(peg$currPos, 2) === peg$c58) {
        s1 = peg$c58;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c59); }
      }
      if (s1 === peg$FAILED) {
        if (peg$c60.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c61); }
        }
      }
    }
    return s0;
  }
    const timeKeeper = options.timeout;
  peg$result = peg$startRuleFunction();
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }
    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}
var bibtex_parser_trace = {
  SyntaxError: peg$SyntaxError$3,
  parse:       peg$parse$3
};

var bibtex_parser_types = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConcatValue = exports.isAbbreviationValue = exports.isNumberValue = exports.isTextStringValue = exports.isPreambleEntry = exports.isStringEntry = exports.isEntry = void 0;
function isEntry(e) {
    return !isStringEntry(e) && !isPreambleEntry(e);
}
exports.isEntry = isEntry;
function isStringEntry(e) {
    return e.entryType === 'string';
}
exports.isStringEntry = isStringEntry;
function isPreambleEntry(e) {
    return e.entryType === 'preamble';
}
exports.isPreambleEntry = isPreambleEntry;
function isTextStringValue(e) {
    return e.kind === 'text_string';
}
exports.isTextStringValue = isTextStringValue;
function isNumberValue(e) {
    return e.kind === 'number';
}
exports.isNumberValue = isNumberValue;
function isAbbreviationValue(e) {
    return e.kind === 'abbreviation';
}
exports.isAbbreviationValue = isAbbreviationValue;
function isConcatValue(e) {
    return e.kind === 'concat';
}
exports.isConcatValue = isConcatValue;
});
unwrapExports(bibtex_parser_types);
var bibtex_parser_types_1 = bibtex_parser_types.isConcatValue;
var bibtex_parser_types_2 = bibtex_parser_types.isAbbreviationValue;
var bibtex_parser_types_3 = bibtex_parser_types.isNumberValue;
var bibtex_parser_types_4 = bibtex_parser_types.isTextStringValue;
var bibtex_parser_types_5 = bibtex_parser_types.isPreambleEntry;
var bibtex_parser_types_6 = bibtex_parser_types.isStringEntry;
var bibtex_parser_types_7 = bibtex_parser_types.isEntry;

var bibtex_parser = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
__exportStar(bibtex_parser_types, exports);
Object.defineProperty(exports, "isSyntaxError", { enumerable: true, get: function () { return pegjs_types.isSyntaxError; } });
Object.defineProperty(exports, "SyntaxError", { enumerable: true, get: function () { return pegjs_types.SyntaxError; } });
function parse(s, _option) {
    const option = _option ? Object.assign({}, _option) : undefined;
    if (option && option.timeout) {
        if (typeof option.timeout !== 'object') {
            option.timeout = new timeout.TimeKeeper(option.timeout);
        }
    }
    if (option && option.tracer) {
        return bibtex_parser_trace.parse(s, option);
    }
    else {
        return bibtex_parser_simple.parse(s, option);
    }
}
exports.parse = parse;
});
unwrapExports(bibtex_parser);
var bibtex_parser_1 = bibtex_parser.parse;

function peg$subclass$4(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}
function peg$SyntaxError$4(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError$4);
  }
}
peg$subclass$4(peg$SyntaxError$4, Error);
peg$SyntaxError$4.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },
        "class": function(expectation) {
          var escapedParts = "",
              i;
          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }
          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },
        any: function(expectation) {
          return "any character";
        },
        end: function(expectation) {
          return "end of input";
        },
        other: function(expectation) {
          return expectation.description;
        }
      };
  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }
  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }
  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }
  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }
  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;
    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }
    descriptions.sort();
    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }
    switch (descriptions.length) {
      case 1:
        return descriptions[0];
      case 2:
        return descriptions[0] + " or " + descriptions[1];
      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }
  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }
  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};
function peg$parse$4(input, options) {
  options = options !== void 0 ? options : {};
  var peg$FAILED = {},
      peg$startRuleFunctions = { Root: peg$parseRoot },
      peg$startRuleFunction  = peg$parseRoot,
      peg$c0 = function(x) {
            return { kind: 'full', content: x };
        },
      peg$c1 = function(x) {
            return { kind: 'halt_on_error', content: x };
        },
      peg$c2 = function(x) {
            return { kind: 'unknown', content: x };
        },
      peg$c3 = "(",
      peg$c4 = peg$literalExpectation("(", false),
      peg$c5 = ")",
      peg$c6 = peg$literalExpectation(")", false),
      peg$c7 = function(path) {
            return { kind: 'file_stack', path, content: [] };
        },
      peg$c8 = function(path, content) {
            return { kind: 'file_stack', path, content };
        },
      peg$c9 = function(path, content) {
          return { kind: 'file_stack', path, content };
        },
      peg$c10 = peg$anyExpectation(),
      peg$c11 = function(x) {
            return { kind: 'text_string', content:x };
        },
      peg$c12 = "!",
      peg$c13 = peg$literalExpectation("!", false),
      peg$c14 = function(body) {
            return { kind: 'tex_error', message: body.message, line: body.line, command: body.command };
        },
      peg$c15 = function(head, body) {
            return { kind: 'latexmk_error', message: body.message, path: head.path, line: head.line, command: body.command };
        },
      peg$c16 = ":",
      peg$c17 = peg$literalExpectation(":", false),
      peg$c18 = /^[0-9]/,
      peg$c19 = peg$classExpectation([["0", "9"]], false, false),
      peg$c20 = ": ",
      peg$c21 = peg$literalExpectation(": ", false),
      peg$c22 = function(path, line) {
          return { path, line: Number(line) };
        },
      peg$c23 = "l.",
      peg$c24 = peg$literalExpectation("l.", false),
      peg$c25 = function(message, line, command) {
            return { message, line: Number(line), command: command || undefined };
        },
      peg$c26 = "[",
      peg$c27 = peg$literalExpectation("[", false),
      peg$c28 = /^[^\]]/,
      peg$c29 = peg$classExpectation(["]"], true, false),
      peg$c30 = "]",
      peg$c31 = peg$literalExpectation("]", false),
      peg$c32 = function(page, content) {
            return { kind: 'page_number', page: Number(page), content: content || undefined };
        },
      peg$c35 = function(x) {
            timeKeeper && timeKeeper.check();
            return { kind: 'text_string', content:x };
        },
      peg$c36 = function(x) {
            timeKeeper && timeKeeper.check();
            return { kind: 'text_string', content:x };
        },
      peg$c37 = /^[^()]/,
      peg$c38 = peg$classExpectation(["(", ")"], true, false),
      peg$c39 = ".",
      peg$c40 = peg$literalExpectation(".", false),
      peg$c41 = "/",
      peg$c42 = peg$literalExpectation("/", false),
      peg$c43 = /^[a-zA-Z]/,
      peg$c44 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false),
      peg$c45 = "\\\\",
      peg$c46 = peg$literalExpectation("\\\\", false),
      peg$c47 = "l",
      peg$c48 = peg$literalExpectation("l", false),
      peg$c49 = "o",
      peg$c50 = peg$literalExpectation("o", false),
      peg$c51 = "a",
      peg$c52 = peg$literalExpectation("a", false),
      peg$c53 = "d",
      peg$c54 = peg$literalExpectation("d", false),
      peg$c55 = "u",
      peg$c56 = peg$literalExpectation("u", false),
      peg$c57 = "c",
      peg$c58 = peg$literalExpectation("c", false),
      peg$c59 = "s",
      peg$c60 = peg$literalExpectation("s", false),
      peg$c61 = "i",
      peg$c62 = peg$literalExpectation("i", false),
      peg$c63 = "n",
      peg$c64 = peg$literalExpectation("n", false),
      peg$c65 = "g",
      peg$c66 = peg$literalExpectation("g", false),
      peg$c67 = "r",
      peg$c68 = peg$literalExpectation("r", false),
      peg$c69 = "e",
      peg$c70 = peg$literalExpectation("e", false),
      peg$c71 = "h",
      peg$c72 = peg$literalExpectation("h", false),
      peg$c73 = "\"",
      peg$c74 = peg$literalExpectation("\"", false),
      peg$c75 = "\\\"",
      peg$c76 = peg$literalExpectation("\\\"", false),
      peg$c77 = /^[^"]/,
      peg$c78 = peg$classExpectation(["\""], true, false),
      peg$c79 = function(x) {
          return x;
        },
      peg$c80 = "\r\n",
      peg$c81 = peg$literalExpectation("\r\n", false),
      peg$c82 = "\n",
      peg$c83 = peg$literalExpectation("\n", false),
      peg$c84 = /^[ \t]/,
      peg$c85 = peg$classExpectation([" ", "\t"], false, false),
      peg$currPos          = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,
      peg$result;
  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }
    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }
  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }
  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }
  function peg$anyExpectation() {
    return { type: "any" };
  }
  function peg$endExpectation() {
    return { type: "end" };
  }
  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;
    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }
      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };
      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }
        p++;
      }
      peg$posDetailsCache[pos] = details;
      return details;
    }
  }
  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }
  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }
    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }
    peg$maxFailExpected.push(expected);
  }
  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError$4(
      peg$SyntaxError$4.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }
  function peg$parseRoot() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parseLogTextOutsideFileStack();
    if (s2 !== peg$FAILED) {
      s3 = peg$parseFileStack();
      if (s3 !== peg$FAILED) {
        s4 = peg$parseLogTextOutsideFileStack();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s1 = peg$c0(s1);
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseLogTextOutsideFileStackRightOpen();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseFileStackRightOpen();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s1 = peg$c1(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$currPos;
        s3 = peg$parseLogTextOutsideFileStack();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseFileStack();
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$currPos;
            s3 = peg$parseLogTextOutsideFileStack();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseFileStack();
              if (s4 !== peg$FAILED) {
                s3 = [s3, s4];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s1 = peg$c2(s1);
        }
        s0 = s1;
      }
    }
    return s0;
  }
  function peg$parseFileStack() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsePath();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 41) {
          s3 = peg$c5;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c6); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          if (input.charCodeAt(peg$currPos) === 41) {
            s5 = peg$c5;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c6); }
          }
          if (s5 === peg$FAILED) {
            s5 = peg$parseDelimiter();
          }
          peg$silentFails--;
          if (s5 !== peg$FAILED) {
            peg$currPos = s4;
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse__();
            if (s5 !== peg$FAILED) {
              s1 = peg$c7(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c3;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c4); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsePath();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseDelimiter();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseDelimiter();
            }
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parseFileStackElement();
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                s5 = peg$parseFileStackElement();
              }
            } else {
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c5;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c6); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse__();
                if (s6 !== peg$FAILED) {
                  s1 = peg$c8(s2, s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseFileStackRightOpen() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsePath();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseDelimiter();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseDelimiter();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseFileStackElement();
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parseFileStackElement();
            }
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s1 = peg$c9(s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLogTextOutsideFileStackRightOpen() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$currPos;
    s4 = peg$currPos;
    peg$silentFails++;
    s5 = peg$parseFileStackRightOpen();
    peg$silentFails--;
    if (s5 === peg$FAILED) {
      s4 = void 0;
    } else {
      peg$currPos = s4;
      s4 = peg$FAILED;
    }
    if (s4 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s5 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s5 !== peg$FAILED) {
        s4 = [s4, s5];
        s3 = s4;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseFileStackRightOpen();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      s1 = peg$c11(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseFileStackElement() {
    var s0;
    s0 = peg$parseFileStack();
    if (s0 === peg$FAILED) {
      s0 = peg$parsePageNumber();
      if (s0 === peg$FAILED) {
        s0 = peg$parseTexError();
        if (s0 === peg$FAILED) {
          s0 = peg$parseLatexmkError();
          if (s0 === peg$FAILED) {
            s0 = peg$parseLogText();
          }
        }
      }
    }
    return s0;
  }
  function peg$parseTexError() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseLineBreak();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 33) {
        s2 = peg$c12;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseTexErrorBody();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse__();
            if (s5 !== peg$FAILED) {
              s1 = peg$c14(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLatexmkError() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseLineBreak();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseLatexmkErrorPrefix();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseTexErrorBody();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse__();
            if (s5 !== peg$FAILED) {
              s1 = peg$c15(s2, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLatexmkErrorPrefix() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$currPos;
    s3 = peg$parsePathPrefix();
    if (s3 !== peg$FAILED) {
      s4 = [];
      s5 = peg$currPos;
      s6 = peg$currPos;
      peg$silentFails++;
      s7 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 58) {
        s8 = peg$c16;
        peg$currPos++;
      } else {
        s8 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c17); }
      }
      if (s8 !== peg$FAILED) {
        s9 = [];
        if (peg$c18.test(input.charAt(peg$currPos))) {
          s10 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s10 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c19); }
        }
        if (s10 !== peg$FAILED) {
          while (s10 !== peg$FAILED) {
            s9.push(s10);
            if (peg$c18.test(input.charAt(peg$currPos))) {
              s10 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s10 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c19); }
            }
          }
        } else {
          s9 = peg$FAILED;
        }
        if (s9 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c20) {
            s10 = peg$c20;
            peg$currPos += 2;
          } else {
            s10 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c21); }
          }
          if (s10 !== peg$FAILED) {
            s8 = [s8, s9, s10];
            s7 = s8;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
        } else {
          peg$currPos = s7;
          s7 = peg$FAILED;
        }
      } else {
        peg$currPos = s7;
        s7 = peg$FAILED;
      }
      peg$silentFails--;
      if (s7 === peg$FAILED) {
        s6 = void 0;
      } else {
        peg$currPos = s6;
        s6 = peg$FAILED;
      }
      if (s6 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s7 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s7 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c10); }
        }
        if (s7 !== peg$FAILED) {
          s6 = [s6, s7];
          s5 = s6;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
      } else {
        peg$currPos = s5;
        s5 = peg$FAILED;
      }
      if (s5 !== peg$FAILED) {
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 58) {
            s8 = peg$c16;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c17); }
          }
          if (s8 !== peg$FAILED) {
            s9 = [];
            if (peg$c18.test(input.charAt(peg$currPos))) {
              s10 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s10 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c19); }
            }
            if (s10 !== peg$FAILED) {
              while (s10 !== peg$FAILED) {
                s9.push(s10);
                if (peg$c18.test(input.charAt(peg$currPos))) {
                  s10 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s10 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c19); }
                }
              }
            } else {
              s9 = peg$FAILED;
            }
            if (s9 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c20) {
                s10 = peg$c20;
                peg$currPos += 2;
              } else {
                s10 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c21); }
              }
              if (s10 !== peg$FAILED) {
                s8 = [s8, s9, s10];
                s7 = s8;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c10); }
            }
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        }
      } else {
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 58) {
        s2 = peg$c16;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c17); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = [];
        if (peg$c18.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c19); }
        }
        if (s5 !== peg$FAILED) {
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c18.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c19); }
            }
          }
        } else {
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s4 = peg$c16;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c17); }
          }
          if (s4 !== peg$FAILED) {
            s1 = peg$c22(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseTexErrorBody() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parseTexErrorChar();
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseTexErrorChar();
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseLineBreak();
      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c23) {
          s3 = peg$c23;
          peg$currPos += 2;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c24); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = [];
          if (peg$c18.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c19); }
          }
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              if (peg$c18.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c19); }
              }
            }
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseskip_space();
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              s7 = [];
              s8 = peg$currPos;
              s9 = peg$currPos;
              peg$silentFails++;
              s10 = peg$parseLineBreak();
              peg$silentFails--;
              if (s10 === peg$FAILED) {
                s9 = void 0;
              } else {
                peg$currPos = s9;
                s9 = peg$FAILED;
              }
              if (s9 !== peg$FAILED) {
                if (input.length > peg$currPos) {
                  s10 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s10 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c10); }
                }
                if (s10 !== peg$FAILED) {
                  s9 = [s9, s10];
                  s8 = s9;
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
              while (s8 !== peg$FAILED) {
                s7.push(s8);
                s8 = peg$currPos;
                s9 = peg$currPos;
                peg$silentFails++;
                s10 = peg$parseLineBreak();
                peg$silentFails--;
                if (s10 === peg$FAILED) {
                  s9 = void 0;
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
                if (s9 !== peg$FAILED) {
                  if (input.length > peg$currPos) {
                    s10 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s10 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c10); }
                  }
                  if (s10 !== peg$FAILED) {
                    s9 = [s9, s10];
                    s8 = s9;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
              }
              if (s7 !== peg$FAILED) {
                s6 = input.substring(s6, peg$currPos);
              } else {
                s6 = s7;
              }
              if (s6 !== peg$FAILED) {
                s1 = peg$c25(s1, s4, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseTexErrorChar() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$currPos;
    s3 = peg$parseLineBreak();
    if (s3 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c23) {
        s4 = peg$c23;
        peg$currPos += 2;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c24); }
      }
      if (s4 !== peg$FAILED) {
        s5 = [];
        if (peg$c18.test(input.charAt(peg$currPos))) {
          s6 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s6 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c19); }
        }
        if (s6 !== peg$FAILED) {
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c18.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c19); }
            }
          }
        } else {
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s3 = [s3, s4, s5];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsePageNumber() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c26;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c27); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (peg$c18.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c19); }
      }
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$c18.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c19); }
          }
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = [];
          if (peg$c28.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c29); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c28.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c29); }
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 93) {
              s5 = peg$c30;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c31); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                s1 = peg$c32(s2, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLogTextOutsideFileStack() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$currPos;
    s4 = peg$currPos;
    peg$silentFails++;
    s5 = peg$parseFileStack();
    peg$silentFails--;
    if (s5 === peg$FAILED) {
      s4 = void 0;
    } else {
      peg$currPos = s4;
      s4 = peg$FAILED;
    }
    if (s4 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s5 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s5 !== peg$FAILED) {
        s4 = [s4, s5];
        s3 = s4;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseFileStack();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      s1 = peg$c35(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseLogText() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parseLogTextElement();
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseLogTextElement();
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      s1 = peg$c36(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseLogTextElement() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parseFileStack();
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseParenthesisString();
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parseFileStack();
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = void 0;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseTexError();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          peg$silentFails++;
          s4 = peg$parseLatexmkError();
          peg$silentFails--;
          if (s4 === peg$FAILED) {
            s3 = void 0;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            peg$silentFails++;
            s5 = peg$parsePageNumber();
            peg$silentFails--;
            if (s5 === peg$FAILED) {
              s4 = void 0;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              if (peg$c37.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c38); }
              }
              if (s5 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseParenthesisString() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseLogTextElement();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseLogTextElement();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 41) {
          s3 = peg$c5;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c6); }
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsePath() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsePathPrefix();
    if (s2 !== peg$FAILED) {
      s3 = [];
      s4 = peg$parsePathChar();
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsePathChar();
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parseMiktexPath();
    }
    return s0;
  }
  function peg$parsePathPrefix() {
    var s0, s1, s2;
    if (input.charCodeAt(peg$currPos) === 46) {
      s0 = peg$c39;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c40); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 47) {
        s0 = peg$c41;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (peg$c43.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c44); }
        }
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s2 = peg$c16;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c17); }
          }
          if (s2 !== peg$FAILED) {
            s1 = [s1, s2];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c45) {
            s0 = peg$c45;
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c46); }
          }
        }
      }
    }
    return s0;
  }
  function peg$parsePathChar() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parsePathEnd();
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsePathEnd() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31;
    s0 = peg$parseLineBreak();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseskip_space();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s2 = peg$c3;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsePath();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        if (input.charCodeAt(peg$currPos) === 41) {
          s2 = peg$c5;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c6); }
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (input.charCodeAt(peg$currPos) === 41) {
              s2 = peg$c5;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseskip_space();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 40) {
              s3 = peg$c3;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parsePath();
              if (s4 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = [];
          s2 = peg$parseSpace();
          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s2 = peg$c5;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
          }
          if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
              s1.push(s2);
              s2 = peg$parseSpace();
              if (s2 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 41) {
                  s2 = peg$c5;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c6); }
                }
              }
            }
          } else {
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseLineBreak();
            if (s2 !== peg$FAILED) {
              s1 = [s1, s2];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 40) {
              s1 = peg$c3;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parse__();
              if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 108) {
                  s3 = peg$c47;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c48); }
                }
                if (s3 !== peg$FAILED) {
                  s4 = peg$parse__();
                  if (s4 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 111) {
                      s5 = peg$c49;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c50); }
                    }
                    if (s5 !== peg$FAILED) {
                      s6 = peg$parse__();
                      if (s6 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 97) {
                          s7 = peg$c51;
                          peg$currPos++;
                        } else {
                          s7 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c52); }
                        }
                        if (s7 !== peg$FAILED) {
                          s8 = peg$parse__();
                          if (s8 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 100) {
                              s9 = peg$c53;
                              peg$currPos++;
                            } else {
                              s9 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c54); }
                            }
                            if (s9 !== peg$FAILED) {
                              s10 = peg$parse__();
                              if (s10 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 108) {
                                  s11 = peg$c47;
                                  peg$currPos++;
                                } else {
                                  s11 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c48); }
                                }
                                if (s11 !== peg$FAILED) {
                                  s12 = peg$parse__();
                                  if (s12 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 117) {
                                      s13 = peg$c55;
                                      peg$currPos++;
                                    } else {
                                      s13 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c56); }
                                    }
                                    if (s13 !== peg$FAILED) {
                                      s14 = peg$parse__();
                                      if (s14 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 99) {
                                          s15 = peg$c57;
                                          peg$currPos++;
                                        } else {
                                          s15 = peg$FAILED;
                                          if (peg$silentFails === 0) { peg$fail(peg$c58); }
                                        }
                                        if (s15 !== peg$FAILED) {
                                          s16 = peg$parse__();
                                          if (s16 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 58) {
                                              s17 = peg$c16;
                                              peg$currPos++;
                                            } else {
                                              s17 = peg$FAILED;
                                              if (peg$silentFails === 0) { peg$fail(peg$c17); }
                                            }
                                            if (s17 !== peg$FAILED) {
                                              s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17];
                                              s0 = s1;
                                            } else {
                                              peg$currPos = s0;
                                              s0 = peg$FAILED;
                                            }
                                          } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                          }
                                        } else {
                                          peg$currPos = s0;
                                          s0 = peg$FAILED;
                                        }
                                      } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                      }
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 40) {
                s1 = peg$c3;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parse__();
                if (s2 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 117) {
                    s3 = peg$c55;
                    peg$currPos++;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c56); }
                  }
                  if (s3 !== peg$FAILED) {
                    s4 = peg$parse__();
                    if (s4 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 115) {
                        s5 = peg$c59;
                        peg$currPos++;
                      } else {
                        s5 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c60); }
                      }
                      if (s5 !== peg$FAILED) {
                        s6 = peg$parse__();
                        if (s6 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 105) {
                            s7 = peg$c61;
                            peg$currPos++;
                          } else {
                            s7 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c62); }
                          }
                          if (s7 !== peg$FAILED) {
                            s8 = peg$parse__();
                            if (s8 !== peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 110) {
                                s9 = peg$c63;
                                peg$currPos++;
                              } else {
                                s9 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c64); }
                              }
                              if (s9 !== peg$FAILED) {
                                s10 = peg$parse__();
                                if (s10 !== peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 103) {
                                    s11 = peg$c65;
                                    peg$currPos++;
                                  } else {
                                    s11 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c66); }
                                  }
                                  if (s11 !== peg$FAILED) {
                                    s12 = peg$parse__();
                                    if (s12 !== peg$FAILED) {
                                      if (input.charCodeAt(peg$currPos) === 114) {
                                        s13 = peg$c67;
                                        peg$currPos++;
                                      } else {
                                        s13 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c68); }
                                      }
                                      if (s13 !== peg$FAILED) {
                                        s14 = peg$parse__();
                                        if (s14 !== peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 101) {
                                            s15 = peg$c69;
                                            peg$currPos++;
                                          } else {
                                            s15 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c70); }
                                          }
                                          if (s15 !== peg$FAILED) {
                                            s16 = peg$parse__();
                                            if (s16 !== peg$FAILED) {
                                              if (input.charCodeAt(peg$currPos) === 97) {
                                                s17 = peg$c51;
                                                peg$currPos++;
                                              } else {
                                                s17 = peg$FAILED;
                                                if (peg$silentFails === 0) { peg$fail(peg$c52); }
                                              }
                                              if (s17 !== peg$FAILED) {
                                                s18 = peg$parse__();
                                                if (s18 !== peg$FAILED) {
                                                  if (input.charCodeAt(peg$currPos) === 100) {
                                                    s19 = peg$c53;
                                                    peg$currPos++;
                                                  } else {
                                                    s19 = peg$FAILED;
                                                    if (peg$silentFails === 0) { peg$fail(peg$c54); }
                                                  }
                                                  if (s19 !== peg$FAILED) {
                                                    s20 = peg$parse__();
                                                    if (s20 !== peg$FAILED) {
                                                      if (input.charCodeAt(peg$currPos) === 99) {
                                                        s21 = peg$c57;
                                                        peg$currPos++;
                                                      } else {
                                                        s21 = peg$FAILED;
                                                        if (peg$silentFails === 0) { peg$fail(peg$c58); }
                                                      }
                                                      if (s21 !== peg$FAILED) {
                                                        s22 = peg$parse__();
                                                        if (s22 !== peg$FAILED) {
                                                          if (input.charCodeAt(peg$currPos) === 97) {
                                                            s23 = peg$c51;
                                                            peg$currPos++;
                                                          } else {
                                                            s23 = peg$FAILED;
                                                            if (peg$silentFails === 0) { peg$fail(peg$c52); }
                                                          }
                                                          if (s23 !== peg$FAILED) {
                                                            s24 = peg$parse__();
                                                            if (s24 !== peg$FAILED) {
                                                              if (input.charCodeAt(peg$currPos) === 99) {
                                                                s25 = peg$c57;
                                                                peg$currPos++;
                                                              } else {
                                                                s25 = peg$FAILED;
                                                                if (peg$silentFails === 0) { peg$fail(peg$c58); }
                                                              }
                                                              if (s25 !== peg$FAILED) {
                                                                s26 = peg$parse__();
                                                                if (s26 !== peg$FAILED) {
                                                                  if (input.charCodeAt(peg$currPos) === 104) {
                                                                    s27 = peg$c71;
                                                                    peg$currPos++;
                                                                  } else {
                                                                    s27 = peg$FAILED;
                                                                    if (peg$silentFails === 0) { peg$fail(peg$c72); }
                                                                  }
                                                                  if (s27 !== peg$FAILED) {
                                                                    s28 = peg$parse__();
                                                                    if (s28 !== peg$FAILED) {
                                                                      if (input.charCodeAt(peg$currPos) === 101) {
                                                                        s29 = peg$c69;
                                                                        peg$currPos++;
                                                                      } else {
                                                                        s29 = peg$FAILED;
                                                                        if (peg$silentFails === 0) { peg$fail(peg$c70); }
                                                                      }
                                                                      if (s29 !== peg$FAILED) {
                                                                        s30 = peg$parse__();
                                                                        if (s30 !== peg$FAILED) {
                                                                          if (input.charCodeAt(peg$currPos) === 58) {
                                                                            s31 = peg$c16;
                                                                            peg$currPos++;
                                                                          } else {
                                                                            s31 = peg$FAILED;
                                                                            if (peg$silentFails === 0) { peg$fail(peg$c17); }
                                                                          }
                                                                          if (s31 !== peg$FAILED) {
                                                                            s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31];
                                                                            s0 = s1;
                                                                          } else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                          }
                                                                        } else {
                                                                          peg$currPos = s0;
                                                                          s0 = peg$FAILED;
                                                                        }
                                                                      } else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                      }
                                                                    } else {
                                                                      peg$currPos = s0;
                                                                      s0 = peg$FAILED;
                                                                    }
                                                                  } else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                  }
                                                                } else {
                                                                  peg$currPos = s0;
                                                                  s0 = peg$FAILED;
                                                                }
                                                              } else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                              }
                                                            } else {
                                                              peg$currPos = s0;
                                                              s0 = peg$FAILED;
                                                            }
                                                          } else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                          }
                                                        } else {
                                                          peg$currPos = s0;
                                                          s0 = peg$FAILED;
                                                        }
                                                      } else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                      }
                                                    } else {
                                                      peg$currPos = s0;
                                                      s0 = peg$FAILED;
                                                    }
                                                  } else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                  }
                                                } else {
                                                  peg$currPos = s0;
                                                  s0 = peg$FAILED;
                                                }
                                              } else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                              }
                                            } else {
                                              peg$currPos = s0;
                                              s0 = peg$FAILED;
                                            }
                                          } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                          }
                                        } else {
                                          peg$currPos = s0;
                                          s0 = peg$FAILED;
                                        }
                                      } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                      }
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parseMiktexPath() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c73;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c74); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (input.substr(peg$currPos, 2) === peg$c75) {
        s4 = peg$c75;
        peg$currPos += 2;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c76); }
      }
      if (s4 === peg$FAILED) {
        if (peg$c77.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c78); }
        }
      }
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (input.substr(peg$currPos, 2) === peg$c75) {
            s4 = peg$c75;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c76); }
          }
          if (s4 === peg$FAILED) {
            if (peg$c77.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c78); }
            }
          }
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c73;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c74); }
        }
        if (s3 !== peg$FAILED) {
          s1 = peg$c79(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLineBreak() {
    var s0;
    if (input.substr(peg$currPos, 2) === peg$c80) {
      s0 = peg$c80;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c81); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 10) {
        s0 = peg$c82;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c83); }
      }
    }
    return s0;
  }
  function peg$parseSpace() {
    var s0;
    if (peg$c84.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c85); }
    }
    return s0;
  }
  function peg$parseDelimiter() {
    var s0;
    s0 = peg$parseSpace();
    if (s0 === peg$FAILED) {
      s0 = peg$parseLineBreak();
    }
    return s0;
  }
  function peg$parseskip_space() {
    var s0, s1;
    s0 = [];
    s1 = peg$parseSpace();
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parseSpace();
    }
    return s0;
  }
  function peg$parse__() {
    var s0, s1, s2, s3, s4;
    s0 = [];
    s1 = peg$parseSpace();
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parseTexError();
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseLatexmkError();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseLineBreak();
          if (s4 !== peg$FAILED) {
            s2 = [s2, s3, s4];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parseSpace();
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseTexError();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          peg$silentFails++;
          s4 = peg$parseLatexmkError();
          peg$silentFails--;
          if (s4 === peg$FAILED) {
            s3 = void 0;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseLineBreak();
            if (s4 !== peg$FAILED) {
              s2 = [s2, s3, s4];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      }
    }
    return s0;
  }
    const timeKeeper = options.timeout;
  peg$result = peg$startRuleFunction();
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }
    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}
var latex_log_parser_simple = {
  SyntaxError: peg$SyntaxError$4,
  parse:       peg$parse$4
};

function peg$subclass$5(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}
function peg$SyntaxError$5(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError$5);
  }
}
peg$subclass$5(peg$SyntaxError$5, Error);
peg$SyntaxError$5.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },
        "class": function(expectation) {
          var escapedParts = "",
              i;
          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }
          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },
        any: function(expectation) {
          return "any character";
        },
        end: function(expectation) {
          return "end of input";
        },
        other: function(expectation) {
          return expectation.description;
        }
      };
  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }
  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }
  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }
  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }
  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;
    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }
    descriptions.sort();
    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }
    switch (descriptions.length) {
      case 1:
        return descriptions[0];
      case 2:
        return descriptions[0] + " or " + descriptions[1];
      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }
  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }
  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};
function peg$parse$5(input, options) {
  options = options !== void 0 ? options : {};
  var peg$FAILED = {},
      peg$startRuleFunctions = { Root: peg$parseRoot },
      peg$startRuleFunction  = peg$parseRoot,
      peg$c0 = function(x) {
            return { kind: 'full', content: x };
        },
      peg$c1 = function(x) {
            return { kind: 'halt_on_error', content: x };
        },
      peg$c2 = function(x) {
            return { kind: 'unknown', content: x };
        },
      peg$c3 = "(",
      peg$c4 = peg$literalExpectation("(", false),
      peg$c5 = ")",
      peg$c6 = peg$literalExpectation(")", false),
      peg$c7 = function(path) {
            return { kind: 'file_stack', path, content: [] };
        },
      peg$c8 = function(path, content) {
            return { kind: 'file_stack', path, content };
        },
      peg$c9 = function(path, content) {
          return { kind: 'file_stack', path, content };
        },
      peg$c10 = peg$anyExpectation(),
      peg$c11 = function(x) {
            return { kind: 'text_string', content:x };
        },
      peg$c12 = "!",
      peg$c13 = peg$literalExpectation("!", false),
      peg$c14 = function(body) {
            return { kind: 'tex_error', message: body.message, line: body.line, command: body.command };
        },
      peg$c15 = function(head, body) {
            return { kind: 'latexmk_error', message: body.message, path: head.path, line: head.line, command: body.command };
        },
      peg$c16 = ":",
      peg$c17 = peg$literalExpectation(":", false),
      peg$c18 = /^[0-9]/,
      peg$c19 = peg$classExpectation([["0", "9"]], false, false),
      peg$c20 = ": ",
      peg$c21 = peg$literalExpectation(": ", false),
      peg$c22 = function(path, line) {
          return { path, line: Number(line) };
        },
      peg$c23 = "l.",
      peg$c24 = peg$literalExpectation("l.", false),
      peg$c25 = function(message, line, command) {
            return { message, line: Number(line), command: command || undefined };
        },
      peg$c26 = "[",
      peg$c27 = peg$literalExpectation("[", false),
      peg$c28 = /^[^\]]/,
      peg$c29 = peg$classExpectation(["]"], true, false),
      peg$c30 = "]",
      peg$c31 = peg$literalExpectation("]", false),
      peg$c32 = function(page, content) {
            return { kind: 'page_number', page: Number(page), content: content || undefined };
        },
      peg$c35 = function(x) {
            timeKeeper && timeKeeper.check();
            return { kind: 'text_string', content:x };
        },
      peg$c36 = function(x) {
            timeKeeper && timeKeeper.check();
            return { kind: 'text_string', content:x };
        },
      peg$c37 = /^[^()]/,
      peg$c38 = peg$classExpectation(["(", ")"], true, false),
      peg$c39 = ".",
      peg$c40 = peg$literalExpectation(".", false),
      peg$c41 = "/",
      peg$c42 = peg$literalExpectation("/", false),
      peg$c43 = /^[a-zA-Z]/,
      peg$c44 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false),
      peg$c45 = "\\\\",
      peg$c46 = peg$literalExpectation("\\\\", false),
      peg$c47 = "l",
      peg$c48 = peg$literalExpectation("l", false),
      peg$c49 = "o",
      peg$c50 = peg$literalExpectation("o", false),
      peg$c51 = "a",
      peg$c52 = peg$literalExpectation("a", false),
      peg$c53 = "d",
      peg$c54 = peg$literalExpectation("d", false),
      peg$c55 = "u",
      peg$c56 = peg$literalExpectation("u", false),
      peg$c57 = "c",
      peg$c58 = peg$literalExpectation("c", false),
      peg$c59 = "s",
      peg$c60 = peg$literalExpectation("s", false),
      peg$c61 = "i",
      peg$c62 = peg$literalExpectation("i", false),
      peg$c63 = "n",
      peg$c64 = peg$literalExpectation("n", false),
      peg$c65 = "g",
      peg$c66 = peg$literalExpectation("g", false),
      peg$c67 = "r",
      peg$c68 = peg$literalExpectation("r", false),
      peg$c69 = "e",
      peg$c70 = peg$literalExpectation("e", false),
      peg$c71 = "h",
      peg$c72 = peg$literalExpectation("h", false),
      peg$c73 = "\"",
      peg$c74 = peg$literalExpectation("\"", false),
      peg$c75 = "\\\"",
      peg$c76 = peg$literalExpectation("\\\"", false),
      peg$c77 = /^[^"]/,
      peg$c78 = peg$classExpectation(["\""], true, false),
      peg$c79 = function(x) {
          return x;
        },
      peg$c80 = "\r\n",
      peg$c81 = peg$literalExpectation("\r\n", false),
      peg$c82 = "\n",
      peg$c83 = peg$literalExpectation("\n", false),
      peg$c84 = /^[ \t]/,
      peg$c85 = peg$classExpectation([" ", "\t"], false, false),
      peg$currPos          = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,
      peg$result;
  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }
    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }
  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }
  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }
  function peg$anyExpectation() {
    return { type: "any" };
  }
  function peg$endExpectation() {
    return { type: "end" };
  }
  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;
    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }
      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };
      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }
        p++;
      }
      peg$posDetailsCache[pos] = details;
      return details;
    }
  }
  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }
  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }
    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }
    peg$maxFailExpected.push(expected);
  }
  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError$5(
      peg$SyntaxError$5.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }
  function peg$parseRoot() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parseLogTextOutsideFileStack();
    if (s2 !== peg$FAILED) {
      s3 = peg$parseFileStack();
      if (s3 !== peg$FAILED) {
        s4 = peg$parseLogTextOutsideFileStack();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s1 = peg$c0(s1);
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseLogTextOutsideFileStackRightOpen();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseFileStackRightOpen();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s1 = peg$c1(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$currPos;
        s3 = peg$parseLogTextOutsideFileStack();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseFileStack();
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$currPos;
            s3 = peg$parseLogTextOutsideFileStack();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseFileStack();
              if (s4 !== peg$FAILED) {
                s3 = [s3, s4];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s1 = peg$c2(s1);
        }
        s0 = s1;
      }
    }
    return s0;
  }
  function peg$parseFileStack() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsePath();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 41) {
          s3 = peg$c5;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c6); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          if (input.charCodeAt(peg$currPos) === 41) {
            s5 = peg$c5;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c6); }
          }
          if (s5 === peg$FAILED) {
            s5 = peg$parseDelimiter();
          }
          peg$silentFails--;
          if (s5 !== peg$FAILED) {
            peg$currPos = s4;
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse__();
            if (s5 !== peg$FAILED) {
              s1 = peg$c7(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c3;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c4); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsePath();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseDelimiter();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseDelimiter();
            }
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parseFileStackElement();
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                s5 = peg$parseFileStackElement();
              }
            } else {
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c5;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c6); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse__();
                if (s6 !== peg$FAILED) {
                  s1 = peg$c8(s2, s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseFileStackRightOpen() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsePath();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseDelimiter();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseDelimiter();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseFileStackElement();
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parseFileStackElement();
            }
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s1 = peg$c9(s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLogTextOutsideFileStackRightOpen() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$currPos;
    s4 = peg$currPos;
    peg$silentFails++;
    s5 = peg$parseFileStackRightOpen();
    peg$silentFails--;
    if (s5 === peg$FAILED) {
      s4 = void 0;
    } else {
      peg$currPos = s4;
      s4 = peg$FAILED;
    }
    if (s4 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s5 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s5 !== peg$FAILED) {
        s4 = [s4, s5];
        s3 = s4;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseFileStackRightOpen();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      s1 = peg$c11(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseFileStackElement() {
    var s0;
    s0 = peg$parseFileStack();
    if (s0 === peg$FAILED) {
      s0 = peg$parsePageNumber();
      if (s0 === peg$FAILED) {
        s0 = peg$parseTexError();
        if (s0 === peg$FAILED) {
          s0 = peg$parseLatexmkError();
          if (s0 === peg$FAILED) {
            s0 = peg$parseLogText();
          }
        }
      }
    }
    return s0;
  }
  function peg$parseTexError() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseLineBreak();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 33) {
        s2 = peg$c12;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseTexErrorBody();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse__();
            if (s5 !== peg$FAILED) {
              s1 = peg$c14(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLatexmkError() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseLineBreak();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseLatexmkErrorPrefix();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseTexErrorBody();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse__();
            if (s5 !== peg$FAILED) {
              s1 = peg$c15(s2, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLatexmkErrorPrefix() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$currPos;
    s3 = peg$parsePathPrefix();
    if (s3 !== peg$FAILED) {
      s4 = [];
      s5 = peg$currPos;
      s6 = peg$currPos;
      peg$silentFails++;
      s7 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 58) {
        s8 = peg$c16;
        peg$currPos++;
      } else {
        s8 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c17); }
      }
      if (s8 !== peg$FAILED) {
        s9 = [];
        if (peg$c18.test(input.charAt(peg$currPos))) {
          s10 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s10 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c19); }
        }
        if (s10 !== peg$FAILED) {
          while (s10 !== peg$FAILED) {
            s9.push(s10);
            if (peg$c18.test(input.charAt(peg$currPos))) {
              s10 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s10 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c19); }
            }
          }
        } else {
          s9 = peg$FAILED;
        }
        if (s9 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c20) {
            s10 = peg$c20;
            peg$currPos += 2;
          } else {
            s10 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c21); }
          }
          if (s10 !== peg$FAILED) {
            s8 = [s8, s9, s10];
            s7 = s8;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
        } else {
          peg$currPos = s7;
          s7 = peg$FAILED;
        }
      } else {
        peg$currPos = s7;
        s7 = peg$FAILED;
      }
      peg$silentFails--;
      if (s7 === peg$FAILED) {
        s6 = void 0;
      } else {
        peg$currPos = s6;
        s6 = peg$FAILED;
      }
      if (s6 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s7 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s7 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c10); }
        }
        if (s7 !== peg$FAILED) {
          s6 = [s6, s7];
          s5 = s6;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
      } else {
        peg$currPos = s5;
        s5 = peg$FAILED;
      }
      if (s5 !== peg$FAILED) {
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 58) {
            s8 = peg$c16;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c17); }
          }
          if (s8 !== peg$FAILED) {
            s9 = [];
            if (peg$c18.test(input.charAt(peg$currPos))) {
              s10 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s10 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c19); }
            }
            if (s10 !== peg$FAILED) {
              while (s10 !== peg$FAILED) {
                s9.push(s10);
                if (peg$c18.test(input.charAt(peg$currPos))) {
                  s10 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s10 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c19); }
                }
              }
            } else {
              s9 = peg$FAILED;
            }
            if (s9 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c20) {
                s10 = peg$c20;
                peg$currPos += 2;
              } else {
                s10 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c21); }
              }
              if (s10 !== peg$FAILED) {
                s8 = [s8, s9, s10];
                s7 = s8;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c10); }
            }
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        }
      } else {
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 58) {
        s2 = peg$c16;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c17); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = [];
        if (peg$c18.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c19); }
        }
        if (s5 !== peg$FAILED) {
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c18.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c19); }
            }
          }
        } else {
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s4 = peg$c16;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c17); }
          }
          if (s4 !== peg$FAILED) {
            s1 = peg$c22(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseTexErrorBody() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parseTexErrorChar();
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseTexErrorChar();
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseLineBreak();
      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c23) {
          s3 = peg$c23;
          peg$currPos += 2;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c24); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = [];
          if (peg$c18.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c19); }
          }
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              if (peg$c18.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c19); }
              }
            }
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseskip_space();
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              s7 = [];
              s8 = peg$currPos;
              s9 = peg$currPos;
              peg$silentFails++;
              s10 = peg$parseLineBreak();
              peg$silentFails--;
              if (s10 === peg$FAILED) {
                s9 = void 0;
              } else {
                peg$currPos = s9;
                s9 = peg$FAILED;
              }
              if (s9 !== peg$FAILED) {
                if (input.length > peg$currPos) {
                  s10 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s10 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c10); }
                }
                if (s10 !== peg$FAILED) {
                  s9 = [s9, s10];
                  s8 = s9;
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
              while (s8 !== peg$FAILED) {
                s7.push(s8);
                s8 = peg$currPos;
                s9 = peg$currPos;
                peg$silentFails++;
                s10 = peg$parseLineBreak();
                peg$silentFails--;
                if (s10 === peg$FAILED) {
                  s9 = void 0;
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
                if (s9 !== peg$FAILED) {
                  if (input.length > peg$currPos) {
                    s10 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s10 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c10); }
                  }
                  if (s10 !== peg$FAILED) {
                    s9 = [s9, s10];
                    s8 = s9;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
              }
              if (s7 !== peg$FAILED) {
                s6 = input.substring(s6, peg$currPos);
              } else {
                s6 = s7;
              }
              if (s6 !== peg$FAILED) {
                s1 = peg$c25(s1, s4, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseTexErrorChar() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$currPos;
    s3 = peg$parseLineBreak();
    if (s3 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c23) {
        s4 = peg$c23;
        peg$currPos += 2;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c24); }
      }
      if (s4 !== peg$FAILED) {
        s5 = [];
        if (peg$c18.test(input.charAt(peg$currPos))) {
          s6 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s6 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c19); }
        }
        if (s6 !== peg$FAILED) {
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c18.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c19); }
            }
          }
        } else {
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s3 = [s3, s4, s5];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsePageNumber() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c26;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c27); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (peg$c18.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c19); }
      }
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$c18.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c19); }
          }
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = [];
          if (peg$c28.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c29); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c28.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c29); }
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 93) {
              s5 = peg$c30;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c31); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                s1 = peg$c32(s2, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLogTextOutsideFileStack() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$currPos;
    s4 = peg$currPos;
    peg$silentFails++;
    s5 = peg$parseFileStack();
    peg$silentFails--;
    if (s5 === peg$FAILED) {
      s4 = void 0;
    } else {
      peg$currPos = s4;
      s4 = peg$FAILED;
    }
    if (s4 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s5 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s5 !== peg$FAILED) {
        s4 = [s4, s5];
        s3 = s4;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseFileStack();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      s1 = peg$c35(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseLogText() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parseLogTextElement();
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseLogTextElement();
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      s1 = peg$c36(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseLogTextElement() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parseFileStack();
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseParenthesisString();
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parseFileStack();
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = void 0;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseTexError();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          peg$silentFails++;
          s4 = peg$parseLatexmkError();
          peg$silentFails--;
          if (s4 === peg$FAILED) {
            s3 = void 0;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            peg$silentFails++;
            s5 = peg$parsePageNumber();
            peg$silentFails--;
            if (s5 === peg$FAILED) {
              s4 = void 0;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              if (peg$c37.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c38); }
              }
              if (s5 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseParenthesisString() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseLogTextElement();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseLogTextElement();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 41) {
          s3 = peg$c5;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c6); }
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsePath() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsePathPrefix();
    if (s2 !== peg$FAILED) {
      s3 = [];
      s4 = peg$parsePathChar();
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsePathChar();
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parseMiktexPath();
    }
    return s0;
  }
  function peg$parsePathPrefix() {
    var s0, s1, s2;
    if (input.charCodeAt(peg$currPos) === 46) {
      s0 = peg$c39;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c40); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 47) {
        s0 = peg$c41;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (peg$c43.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c44); }
        }
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s2 = peg$c16;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c17); }
          }
          if (s2 !== peg$FAILED) {
            s1 = [s1, s2];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c45) {
            s0 = peg$c45;
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c46); }
          }
        }
      }
    }
    return s0;
  }
  function peg$parsePathChar() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parsePathEnd();
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsePathEnd() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31;
    s0 = peg$parseLineBreak();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseskip_space();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s2 = peg$c3;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsePath();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        if (input.charCodeAt(peg$currPos) === 41) {
          s2 = peg$c5;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c6); }
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (input.charCodeAt(peg$currPos) === 41) {
              s2 = peg$c5;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseskip_space();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 40) {
              s3 = peg$c3;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parsePath();
              if (s4 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = [];
          s2 = peg$parseSpace();
          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s2 = peg$c5;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
          }
          if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
              s1.push(s2);
              s2 = peg$parseSpace();
              if (s2 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 41) {
                  s2 = peg$c5;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c6); }
                }
              }
            }
          } else {
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseLineBreak();
            if (s2 !== peg$FAILED) {
              s1 = [s1, s2];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 40) {
              s1 = peg$c3;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parse__();
              if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 108) {
                  s3 = peg$c47;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c48); }
                }
                if (s3 !== peg$FAILED) {
                  s4 = peg$parse__();
                  if (s4 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 111) {
                      s5 = peg$c49;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c50); }
                    }
                    if (s5 !== peg$FAILED) {
                      s6 = peg$parse__();
                      if (s6 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 97) {
                          s7 = peg$c51;
                          peg$currPos++;
                        } else {
                          s7 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c52); }
                        }
                        if (s7 !== peg$FAILED) {
                          s8 = peg$parse__();
                          if (s8 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 100) {
                              s9 = peg$c53;
                              peg$currPos++;
                            } else {
                              s9 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c54); }
                            }
                            if (s9 !== peg$FAILED) {
                              s10 = peg$parse__();
                              if (s10 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 108) {
                                  s11 = peg$c47;
                                  peg$currPos++;
                                } else {
                                  s11 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c48); }
                                }
                                if (s11 !== peg$FAILED) {
                                  s12 = peg$parse__();
                                  if (s12 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 117) {
                                      s13 = peg$c55;
                                      peg$currPos++;
                                    } else {
                                      s13 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c56); }
                                    }
                                    if (s13 !== peg$FAILED) {
                                      s14 = peg$parse__();
                                      if (s14 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 99) {
                                          s15 = peg$c57;
                                          peg$currPos++;
                                        } else {
                                          s15 = peg$FAILED;
                                          if (peg$silentFails === 0) { peg$fail(peg$c58); }
                                        }
                                        if (s15 !== peg$FAILED) {
                                          s16 = peg$parse__();
                                          if (s16 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 58) {
                                              s17 = peg$c16;
                                              peg$currPos++;
                                            } else {
                                              s17 = peg$FAILED;
                                              if (peg$silentFails === 0) { peg$fail(peg$c17); }
                                            }
                                            if (s17 !== peg$FAILED) {
                                              s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17];
                                              s0 = s1;
                                            } else {
                                              peg$currPos = s0;
                                              s0 = peg$FAILED;
                                            }
                                          } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                          }
                                        } else {
                                          peg$currPos = s0;
                                          s0 = peg$FAILED;
                                        }
                                      } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                      }
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 40) {
                s1 = peg$c3;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parse__();
                if (s2 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 117) {
                    s3 = peg$c55;
                    peg$currPos++;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c56); }
                  }
                  if (s3 !== peg$FAILED) {
                    s4 = peg$parse__();
                    if (s4 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 115) {
                        s5 = peg$c59;
                        peg$currPos++;
                      } else {
                        s5 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c60); }
                      }
                      if (s5 !== peg$FAILED) {
                        s6 = peg$parse__();
                        if (s6 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 105) {
                            s7 = peg$c61;
                            peg$currPos++;
                          } else {
                            s7 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c62); }
                          }
                          if (s7 !== peg$FAILED) {
                            s8 = peg$parse__();
                            if (s8 !== peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 110) {
                                s9 = peg$c63;
                                peg$currPos++;
                              } else {
                                s9 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c64); }
                              }
                              if (s9 !== peg$FAILED) {
                                s10 = peg$parse__();
                                if (s10 !== peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 103) {
                                    s11 = peg$c65;
                                    peg$currPos++;
                                  } else {
                                    s11 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c66); }
                                  }
                                  if (s11 !== peg$FAILED) {
                                    s12 = peg$parse__();
                                    if (s12 !== peg$FAILED) {
                                      if (input.charCodeAt(peg$currPos) === 114) {
                                        s13 = peg$c67;
                                        peg$currPos++;
                                      } else {
                                        s13 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c68); }
                                      }
                                      if (s13 !== peg$FAILED) {
                                        s14 = peg$parse__();
                                        if (s14 !== peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 101) {
                                            s15 = peg$c69;
                                            peg$currPos++;
                                          } else {
                                            s15 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c70); }
                                          }
                                          if (s15 !== peg$FAILED) {
                                            s16 = peg$parse__();
                                            if (s16 !== peg$FAILED) {
                                              if (input.charCodeAt(peg$currPos) === 97) {
                                                s17 = peg$c51;
                                                peg$currPos++;
                                              } else {
                                                s17 = peg$FAILED;
                                                if (peg$silentFails === 0) { peg$fail(peg$c52); }
                                              }
                                              if (s17 !== peg$FAILED) {
                                                s18 = peg$parse__();
                                                if (s18 !== peg$FAILED) {
                                                  if (input.charCodeAt(peg$currPos) === 100) {
                                                    s19 = peg$c53;
                                                    peg$currPos++;
                                                  } else {
                                                    s19 = peg$FAILED;
                                                    if (peg$silentFails === 0) { peg$fail(peg$c54); }
                                                  }
                                                  if (s19 !== peg$FAILED) {
                                                    s20 = peg$parse__();
                                                    if (s20 !== peg$FAILED) {
                                                      if (input.charCodeAt(peg$currPos) === 99) {
                                                        s21 = peg$c57;
                                                        peg$currPos++;
                                                      } else {
                                                        s21 = peg$FAILED;
                                                        if (peg$silentFails === 0) { peg$fail(peg$c58); }
                                                      }
                                                      if (s21 !== peg$FAILED) {
                                                        s22 = peg$parse__();
                                                        if (s22 !== peg$FAILED) {
                                                          if (input.charCodeAt(peg$currPos) === 97) {
                                                            s23 = peg$c51;
                                                            peg$currPos++;
                                                          } else {
                                                            s23 = peg$FAILED;
                                                            if (peg$silentFails === 0) { peg$fail(peg$c52); }
                                                          }
                                                          if (s23 !== peg$FAILED) {
                                                            s24 = peg$parse__();
                                                            if (s24 !== peg$FAILED) {
                                                              if (input.charCodeAt(peg$currPos) === 99) {
                                                                s25 = peg$c57;
                                                                peg$currPos++;
                                                              } else {
                                                                s25 = peg$FAILED;
                                                                if (peg$silentFails === 0) { peg$fail(peg$c58); }
                                                              }
                                                              if (s25 !== peg$FAILED) {
                                                                s26 = peg$parse__();
                                                                if (s26 !== peg$FAILED) {
                                                                  if (input.charCodeAt(peg$currPos) === 104) {
                                                                    s27 = peg$c71;
                                                                    peg$currPos++;
                                                                  } else {
                                                                    s27 = peg$FAILED;
                                                                    if (peg$silentFails === 0) { peg$fail(peg$c72); }
                                                                  }
                                                                  if (s27 !== peg$FAILED) {
                                                                    s28 = peg$parse__();
                                                                    if (s28 !== peg$FAILED) {
                                                                      if (input.charCodeAt(peg$currPos) === 101) {
                                                                        s29 = peg$c69;
                                                                        peg$currPos++;
                                                                      } else {
                                                                        s29 = peg$FAILED;
                                                                        if (peg$silentFails === 0) { peg$fail(peg$c70); }
                                                                      }
                                                                      if (s29 !== peg$FAILED) {
                                                                        s30 = peg$parse__();
                                                                        if (s30 !== peg$FAILED) {
                                                                          if (input.charCodeAt(peg$currPos) === 58) {
                                                                            s31 = peg$c16;
                                                                            peg$currPos++;
                                                                          } else {
                                                                            s31 = peg$FAILED;
                                                                            if (peg$silentFails === 0) { peg$fail(peg$c17); }
                                                                          }
                                                                          if (s31 !== peg$FAILED) {
                                                                            s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31];
                                                                            s0 = s1;
                                                                          } else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                          }
                                                                        } else {
                                                                          peg$currPos = s0;
                                                                          s0 = peg$FAILED;
                                                                        }
                                                                      } else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                      }
                                                                    } else {
                                                                      peg$currPos = s0;
                                                                      s0 = peg$FAILED;
                                                                    }
                                                                  } else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                  }
                                                                } else {
                                                                  peg$currPos = s0;
                                                                  s0 = peg$FAILED;
                                                                }
                                                              } else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                              }
                                                            } else {
                                                              peg$currPos = s0;
                                                              s0 = peg$FAILED;
                                                            }
                                                          } else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                          }
                                                        } else {
                                                          peg$currPos = s0;
                                                          s0 = peg$FAILED;
                                                        }
                                                      } else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                      }
                                                    } else {
                                                      peg$currPos = s0;
                                                      s0 = peg$FAILED;
                                                    }
                                                  } else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                  }
                                                } else {
                                                  peg$currPos = s0;
                                                  s0 = peg$FAILED;
                                                }
                                              } else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                              }
                                            } else {
                                              peg$currPos = s0;
                                              s0 = peg$FAILED;
                                            }
                                          } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                          }
                                        } else {
                                          peg$currPos = s0;
                                          s0 = peg$FAILED;
                                        }
                                      } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                      }
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parseMiktexPath() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c73;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c74); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (input.substr(peg$currPos, 2) === peg$c75) {
        s4 = peg$c75;
        peg$currPos += 2;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c76); }
      }
      if (s4 === peg$FAILED) {
        if (peg$c77.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c78); }
        }
      }
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (input.substr(peg$currPos, 2) === peg$c75) {
            s4 = peg$c75;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c76); }
          }
          if (s4 === peg$FAILED) {
            if (peg$c77.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c78); }
            }
          }
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c73;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c74); }
        }
        if (s3 !== peg$FAILED) {
          s1 = peg$c79(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseLineBreak() {
    var s0;
    if (input.substr(peg$currPos, 2) === peg$c80) {
      s0 = peg$c80;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c81); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 10) {
        s0 = peg$c82;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c83); }
      }
    }
    return s0;
  }
  function peg$parseSpace() {
    var s0;
    if (peg$c84.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c85); }
    }
    return s0;
  }
  function peg$parseDelimiter() {
    var s0;
    s0 = peg$parseSpace();
    if (s0 === peg$FAILED) {
      s0 = peg$parseLineBreak();
    }
    return s0;
  }
  function peg$parseskip_space() {
    var s0, s1;
    s0 = [];
    s1 = peg$parseSpace();
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parseSpace();
    }
    return s0;
  }
  function peg$parse__() {
    var s0, s1, s2, s3, s4;
    s0 = [];
    s1 = peg$parseSpace();
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parseTexError();
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseLatexmkError();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseLineBreak();
          if (s4 !== peg$FAILED) {
            s2 = [s2, s3, s4];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parseSpace();
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseTexError();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          peg$silentFails++;
          s4 = peg$parseLatexmkError();
          peg$silentFails--;
          if (s4 === peg$FAILED) {
            s3 = void 0;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseLineBreak();
            if (s4 !== peg$FAILED) {
              s2 = [s2, s3, s4];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      }
    }
    return s0;
  }
    const timeKeeper = options.timeout;
  peg$result = peg$startRuleFunction();
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }
    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}
var latex_log_parser_trace = {
  SyntaxError: peg$SyntaxError$5,
  parse:       peg$parse$5
};

var latex_log_types = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPageNumber = exports.isLogText = exports.isLatexmkError = exports.isTexError = exports.isFileStack = void 0;
function isFileStack(e) {
    return e.kind === 'file_stack';
}
exports.isFileStack = isFileStack;
function isTexError(e) {
    return e.kind === 'tex_error';
}
exports.isTexError = isTexError;
function isLatexmkError(e) {
    return e.kind === 'latexmk_error';
}
exports.isLatexmkError = isLatexmkError;
function isLogText(e) {
    return e.kind === 'text_string';
}
exports.isLogText = isLogText;
function isPageNumber(e) {
    return e.kind === 'page_number';
}
exports.isPageNumber = isPageNumber;
});
unwrapExports(latex_log_types);
var latex_log_types_1 = latex_log_types.isPageNumber;
var latex_log_types_2 = latex_log_types.isLogText;
var latex_log_types_3 = latex_log_types.isLatexmkError;
var latex_log_types_4 = latex_log_types.isTexError;
var latex_log_types_5 = latex_log_types.isFileStack;

var latex_log_parser = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
__exportStar(latex_log_types, exports);
Object.defineProperty(exports, "isSyntaxError", { enumerable: true, get: function () { return pegjs_types.isSyntaxError; } });
Object.defineProperty(exports, "SyntaxError", { enumerable: true, get: function () { return pegjs_types.SyntaxError; } });
function parse(s, _option) {
    const option = _option ? Object.assign({}, _option) : undefined;
    if (option && option.timeout) {
        if (typeof option.timeout !== 'object') {
            option.timeout = new timeout.TimeKeeper(option.timeout);
        }
    }
    if (option && option.tracer) {
        return latex_log_parser_trace.parse(s, option);
    }
    else {
        return latex_log_parser_simple.parse(s, option);
    }
}
exports.parse = parse;
});
unwrapExports(latex_log_parser);
var latex_log_parser_1 = latex_log_parser.parse;

var main = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.latexParser = exports.latexLogParser = exports.bibtexParser = void 0;
exports.latexParser = latex_parser;
exports.bibtexParser = bibtex_parser;
exports.latexLogParser = latex_log_parser;
});
unwrapExports(main);
var main_1 = main.latexParser;
var main_2 = main.latexLogParser;
var main_3 = main.bibtexParser;

var contextKey = {};

/* node_modules/svelte-json-tree/src/JSONArrow.svelte generated by Svelte v3.23.2 */

const file = "node_modules/svelte-json-tree/src/JSONArrow.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let t_value = "▶" + "";
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t = claim_text(div0_nodes, t_value);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "arrow svelte-1vyml86");
			toggle_class(div0, "expanded", /*expanded*/ ctx[0]);
			add_location(div0, file, 29, 2, 622);
			attr_dev(div1, "class", "container svelte-1vyml86");
			add_location(div1, file, 28, 0, 587);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, t);

			if (!mounted) {
				dispose = listen_dev(div1, "click", /*click_handler*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*expanded*/ 1) {
				toggle_class(div0, "expanded", /*expanded*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { expanded } = $$props;
	const writable_props = ["expanded"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<JSONArrow> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("JSONArrow", $$slots, []);

	function click_handler(event) {
		bubble($$self, event);
	}

	$$self.$set = $$props => {
		if ("expanded" in $$props) $$invalidate(0, expanded = $$props.expanded);
	};

	$$self.$capture_state = () => ({ expanded });

	$$self.$inject_state = $$props => {
		if ("expanded" in $$props) $$invalidate(0, expanded = $$props.expanded);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [expanded, click_handler];
}

class JSONArrow extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { expanded: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "JSONArrow",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*expanded*/ ctx[0] === undefined && !("expanded" in props)) {
			console.warn("<JSONArrow> was created without expected prop 'expanded'");
		}
	}

	get expanded() {
		throw new Error("<JSONArrow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set expanded(value) {
		throw new Error("<JSONArrow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules/svelte-json-tree/src/JSONKey.svelte generated by Svelte v3.23.2 */

const file$1 = "node_modules/svelte-json-tree/src/JSONKey.svelte";

// (16:0) {#if showKey && key}
function create_if_block(ctx) {
	let label;
	let span;
	let t0;
	let t1;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			label = element("label");
			span = element("span");
			t0 = text(/*key*/ ctx[0]);
			t1 = text(/*colon*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			label = claim_element(nodes, "LABEL", { class: true });
			var label_nodes = children(label);
			span = claim_element(label_nodes, "SPAN", {});
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, /*key*/ ctx[0]);
			t1 = claim_text(span_nodes, /*colon*/ ctx[2]);
			span_nodes.forEach(detach_dev);
			label_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(span, file$1, 17, 4, 399);
			attr_dev(label, "class", "svelte-1vlbacg");
			toggle_class(label, "spaced", /*isParentExpanded*/ ctx[1]);
			add_location(label, file$1, 16, 2, 346);
		},
		m: function mount(target, anchor) {
			insert_dev(target, label, anchor);
			append_dev(label, span);
			append_dev(span, t0);
			append_dev(span, t1);

			if (!mounted) {
				dispose = listen_dev(label, "click", /*click_handler*/ ctx[5], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*key*/ 1) set_data_dev(t0, /*key*/ ctx[0]);
			if (dirty & /*colon*/ 4) set_data_dev(t1, /*colon*/ ctx[2]);

			if (dirty & /*isParentExpanded*/ 2) {
				toggle_class(label, "spaced", /*isParentExpanded*/ ctx[1]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(label);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(16:0) {#if showKey && key}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let if_block_anchor;
	let if_block = /*showKey*/ ctx[3] && /*key*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (/*showKey*/ ctx[3] && /*key*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { key } = $$props,
		{ isParentExpanded } = $$props,
		{ isParentArray = false } = $$props,
		{ colon = ":" } = $$props;

	const writable_props = ["key", "isParentExpanded", "isParentArray", "colon"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<JSONKey> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("JSONKey", $$slots, []);

	function click_handler(event) {
		bubble($$self, event);
	}

	$$self.$set = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("isParentExpanded" in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
		if ("colon" in $$props) $$invalidate(2, colon = $$props.colon);
	};

	$$self.$capture_state = () => ({
		key,
		isParentExpanded,
		isParentArray,
		colon,
		showKey
	});

	$$self.$inject_state = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("isParentExpanded" in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
		if ("colon" in $$props) $$invalidate(2, colon = $$props.colon);
		if ("showKey" in $$props) $$invalidate(3, showKey = $$props.showKey);
	};

	let showKey;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*isParentExpanded, isParentArray, key*/ 19) {
			 $$invalidate(3, showKey = isParentExpanded || !isParentArray || key != +key);
		}
	};

	return [key, isParentExpanded, colon, showKey, isParentArray, click_handler];
}

class JSONKey extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			key: 0,
			isParentExpanded: 1,
			isParentArray: 4,
			colon: 2
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "JSONKey",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*key*/ ctx[0] === undefined && !("key" in props)) {
			console.warn("<JSONKey> was created without expected prop 'key'");
		}

		if (/*isParentExpanded*/ ctx[1] === undefined && !("isParentExpanded" in props)) {
			console.warn("<JSONKey> was created without expected prop 'isParentExpanded'");
		}
	}

	get key() {
		throw new Error("<JSONKey>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<JSONKey>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentExpanded() {
		throw new Error("<JSONKey>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentExpanded(value) {
		throw new Error("<JSONKey>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentArray() {
		throw new Error("<JSONKey>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentArray(value) {
		throw new Error("<JSONKey>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get colon() {
		throw new Error("<JSONKey>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set colon(value) {
		throw new Error("<JSONKey>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules/svelte-json-tree/src/JSONNested.svelte generated by Svelte v3.23.2 */
const file$2 = "node_modules/svelte-json-tree/src/JSONNested.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	child_ctx[20] = i;
	return child_ctx;
}

// (57:4) {#if expandable && isParentExpanded}
function create_if_block_3(ctx) {
	let jsonarrow;
	let current;

	jsonarrow = new JSONArrow({
			props: { expanded: /*expanded*/ ctx[0] },
			$$inline: true
		});

	jsonarrow.$on("click", /*toggleExpand*/ ctx[15]);

	const block = {
		c: function create() {
			create_component(jsonarrow.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(jsonarrow.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(jsonarrow, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const jsonarrow_changes = {};
			if (dirty & /*expanded*/ 1) jsonarrow_changes.expanded = /*expanded*/ ctx[0];
			jsonarrow.$set(jsonarrow_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jsonarrow.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jsonarrow.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(jsonarrow, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(57:4) {#if expandable && isParentExpanded}",
		ctx
	});

	return block;
}

// (75:4) {:else}
function create_else_block(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("…");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", {});
			var span_nodes = children(span);
			t = claim_text(span_nodes, "…");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(span, file$2, 75, 6, 2085);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(75:4) {:else}",
		ctx
	});

	return block;
}

// (63:4) {#if isParentExpanded}
function create_if_block$1(ctx) {
	let ul;
	let t;
	let current;
	let mounted;
	let dispose;
	let each_value = /*slicedKeys*/ ctx[13];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block = /*slicedKeys*/ ctx[13].length < /*previewKeys*/ ctx[7].length && create_if_block_1(ctx);

	const block = {
		c: function create() {
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			t = claim_space(ul_nodes);
			if (if_block) if_block.l(ul_nodes);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(ul, "class", "svelte-rwxv37");
			toggle_class(ul, "collapse", !/*expanded*/ ctx[0]);
			add_location(ul, file$2, 63, 6, 1589);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			append_dev(ul, t);
			if (if_block) if_block.m(ul, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(ul, "click", /*expand*/ ctx[16], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*expanded, previewKeys, getKey, slicedKeys, isArray, getValue, getPreviewValue*/ 10129) {
				each_value = /*slicedKeys*/ ctx[13];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(ul, t);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (/*slicedKeys*/ ctx[13].length < /*previewKeys*/ ctx[7].length) {
				if (if_block) ; else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(ul, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*expanded*/ 1) {
				toggle_class(ul, "collapse", !/*expanded*/ ctx[0]);
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
			destroy_each(each_blocks, detaching);
			if (if_block) if_block.d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(63:4) {#if isParentExpanded}",
		ctx
	});

	return block;
}

// (67:10) {#if !expanded && index < previewKeys.length - 1}
function create_if_block_2(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text(",");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, ",");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "comma svelte-rwxv37");
			add_location(span, file$2, 67, 12, 1901);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(67:10) {#if !expanded && index < previewKeys.length - 1}",
		ctx
	});

	return block;
}

// (65:8) {#each slicedKeys as key, index}
function create_each_block(ctx) {
	let jsonnode;
	let t;
	let if_block_anchor;
	let current;

	jsonnode = new JSONNode({
			props: {
				key: /*getKey*/ ctx[8](/*key*/ ctx[12]),
				isParentExpanded: /*expanded*/ ctx[0],
				isParentArray: /*isArray*/ ctx[4],
				value: /*expanded*/ ctx[0]
				? /*getValue*/ ctx[9](/*key*/ ctx[12])
				: /*getPreviewValue*/ ctx[10](/*key*/ ctx[12])
			},
			$$inline: true
		});

	let if_block = !/*expanded*/ ctx[0] && /*index*/ ctx[20] < /*previewKeys*/ ctx[7].length - 1 && create_if_block_2(ctx);

	const block = {
		c: function create() {
			create_component(jsonnode.$$.fragment);
			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(jsonnode.$$.fragment, nodes);
			t = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(jsonnode, target, anchor);
			insert_dev(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const jsonnode_changes = {};
			if (dirty & /*getKey, slicedKeys*/ 8448) jsonnode_changes.key = /*getKey*/ ctx[8](/*key*/ ctx[12]);
			if (dirty & /*expanded*/ 1) jsonnode_changes.isParentExpanded = /*expanded*/ ctx[0];
			if (dirty & /*isArray*/ 16) jsonnode_changes.isParentArray = /*isArray*/ ctx[4];

			if (dirty & /*expanded, getValue, slicedKeys, getPreviewValue*/ 9729) jsonnode_changes.value = /*expanded*/ ctx[0]
			? /*getValue*/ ctx[9](/*key*/ ctx[12])
			: /*getPreviewValue*/ ctx[10](/*key*/ ctx[12]);

			jsonnode.$set(jsonnode_changes);

			if (!/*expanded*/ ctx[0] && /*index*/ ctx[20] < /*previewKeys*/ ctx[7].length - 1) {
				if (if_block) ; else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jsonnode.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jsonnode.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(jsonnode, detaching);
			if (detaching) detach_dev(t);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(65:8) {#each slicedKeys as key, index}",
		ctx
	});

	return block;
}

// (71:8) {#if slicedKeys.length < previewKeys.length }
function create_if_block_1(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("…");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", {});
			var span_nodes = children(span);
			t = claim_text(span_nodes, "…");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(span, file$2, 71, 10, 2026);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(71:8) {#if slicedKeys.length < previewKeys.length }",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let li;
	let label_1;
	let t0;
	let jsonkey;
	let t1;
	let span1;
	let span0;
	let t2;
	let t3;
	let t4;
	let current_block_type_index;
	let if_block1;
	let t5;
	let span2;
	let t6;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*expandable*/ ctx[11] && /*isParentExpanded*/ ctx[2] && create_if_block_3(ctx);

	jsonkey = new JSONKey({
			props: {
				key: /*key*/ ctx[12],
				colon: /*context*/ ctx[14].colon,
				isParentExpanded: /*isParentExpanded*/ ctx[2],
				isParentArray: /*isParentArray*/ ctx[3]
			},
			$$inline: true
		});

	jsonkey.$on("click", /*toggleExpand*/ ctx[15]);
	const if_block_creators = [create_if_block$1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*isParentExpanded*/ ctx[2]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			li = element("li");
			label_1 = element("label");
			if (if_block0) if_block0.c();
			t0 = space();
			create_component(jsonkey.$$.fragment);
			t1 = space();
			span1 = element("span");
			span0 = element("span");
			t2 = text(/*label*/ ctx[1]);
			t3 = text(/*bracketOpen*/ ctx[5]);
			t4 = space();
			if_block1.c();
			t5 = space();
			span2 = element("span");
			t6 = text(/*bracketClose*/ ctx[6]);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			label_1 = claim_element(li_nodes, "LABEL", { class: true });
			var label_1_nodes = children(label_1);
			if (if_block0) if_block0.l(label_1_nodes);
			t0 = claim_space(label_1_nodes);
			claim_component(jsonkey.$$.fragment, label_1_nodes);
			t1 = claim_space(label_1_nodes);
			span1 = claim_element(label_1_nodes, "SPAN", {});
			var span1_nodes = children(span1);
			span0 = claim_element(span1_nodes, "SPAN", {});
			var span0_nodes = children(span0);
			t2 = claim_text(span0_nodes, /*label*/ ctx[1]);
			span0_nodes.forEach(detach_dev);
			t3 = claim_text(span1_nodes, /*bracketOpen*/ ctx[5]);
			span1_nodes.forEach(detach_dev);
			label_1_nodes.forEach(detach_dev);
			t4 = claim_space(li_nodes);
			if_block1.l(li_nodes);
			t5 = claim_space(li_nodes);
			span2 = claim_element(li_nodes, "SPAN", {});
			var span2_nodes = children(span2);
			t6 = claim_text(span2_nodes, /*bracketClose*/ ctx[6]);
			span2_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(span0, file$2, 60, 34, 1504);
			add_location(span1, file$2, 60, 4, 1474);
			attr_dev(label_1, "class", "svelte-rwxv37");
			add_location(label_1, file$2, 55, 2, 1253);
			add_location(span2, file$2, 77, 2, 2112);
			attr_dev(li, "class", "svelte-rwxv37");
			toggle_class(li, "indent", /*isParentExpanded*/ ctx[2]);
			add_location(li, file$2, 54, 0, 1214);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, label_1);
			if (if_block0) if_block0.m(label_1, null);
			append_dev(label_1, t0);
			mount_component(jsonkey, label_1, null);
			append_dev(label_1, t1);
			append_dev(label_1, span1);
			append_dev(span1, span0);
			append_dev(span0, t2);
			append_dev(span1, t3);
			append_dev(li, t4);
			if_blocks[current_block_type_index].m(li, null);
			append_dev(li, t5);
			append_dev(li, span2);
			append_dev(span2, t6);
			current = true;

			if (!mounted) {
				dispose = listen_dev(span1, "click", /*toggleExpand*/ ctx[15], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*expandable*/ ctx[11] && /*isParentExpanded*/ ctx[2]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*expandable, isParentExpanded*/ 2052) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(label_1, t0);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			const jsonkey_changes = {};
			if (dirty & /*key*/ 4096) jsonkey_changes.key = /*key*/ ctx[12];
			if (dirty & /*isParentExpanded*/ 4) jsonkey_changes.isParentExpanded = /*isParentExpanded*/ ctx[2];
			if (dirty & /*isParentArray*/ 8) jsonkey_changes.isParentArray = /*isParentArray*/ ctx[3];
			jsonkey.$set(jsonkey_changes);
			if (!current || dirty & /*label*/ 2) set_data_dev(t2, /*label*/ ctx[1]);
			if (!current || dirty & /*bracketOpen*/ 32) set_data_dev(t3, /*bracketOpen*/ ctx[5]);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block1 = if_blocks[current_block_type_index];

				if (!if_block1) {
					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block1.c();
				}

				transition_in(if_block1, 1);
				if_block1.m(li, t5);
			}

			if (!current || dirty & /*bracketClose*/ 64) set_data_dev(t6, /*bracketClose*/ ctx[6]);

			if (dirty & /*isParentExpanded*/ 4) {
				toggle_class(li, "indent", /*isParentExpanded*/ ctx[2]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(jsonkey.$$.fragment, local);
			transition_in(if_block1);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			transition_out(jsonkey.$$.fragment, local);
			transition_out(if_block1);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			if (if_block0) if_block0.d();
			destroy_component(jsonkey);
			if_blocks[current_block_type_index].d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { key } = $$props,
		{ keys } = $$props,
		{ colon = ":" } = $$props,
		{ label = "" } = $$props,
		{ isParentExpanded } = $$props,
		{ isParentArray } = $$props,
		{ isArray = false } = $$props,
		{ bracketOpen } = $$props,
		{ bracketClose } = $$props;

	let { previewKeys = keys } = $$props;
	let { getKey = key => key } = $$props;
	let { getValue = key => key } = $$props;
	let { getPreviewValue = getValue } = $$props;
	let { expanded = false } = $$props, { expandable = true } = $$props;
	const context = getContext(contextKey);
	setContext(contextKey, { ...context, colon });

	function toggleExpand() {
		$$invalidate(0, expanded = !expanded);
	}

	function expand() {
		$$invalidate(0, expanded = true);
	}

	const writable_props = [
		"key",
		"keys",
		"colon",
		"label",
		"isParentExpanded",
		"isParentArray",
		"isArray",
		"bracketOpen",
		"bracketClose",
		"previewKeys",
		"getKey",
		"getValue",
		"getPreviewValue",
		"expanded",
		"expandable"
	];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<JSONNested> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("JSONNested", $$slots, []);

	$$self.$set = $$props => {
		if ("key" in $$props) $$invalidate(12, key = $$props.key);
		if ("keys" in $$props) $$invalidate(17, keys = $$props.keys);
		if ("colon" in $$props) $$invalidate(18, colon = $$props.colon);
		if ("label" in $$props) $$invalidate(1, label = $$props.label);
		if ("isParentExpanded" in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
		if ("isArray" in $$props) $$invalidate(4, isArray = $$props.isArray);
		if ("bracketOpen" in $$props) $$invalidate(5, bracketOpen = $$props.bracketOpen);
		if ("bracketClose" in $$props) $$invalidate(6, bracketClose = $$props.bracketClose);
		if ("previewKeys" in $$props) $$invalidate(7, previewKeys = $$props.previewKeys);
		if ("getKey" in $$props) $$invalidate(8, getKey = $$props.getKey);
		if ("getValue" in $$props) $$invalidate(9, getValue = $$props.getValue);
		if ("getPreviewValue" in $$props) $$invalidate(10, getPreviewValue = $$props.getPreviewValue);
		if ("expanded" in $$props) $$invalidate(0, expanded = $$props.expanded);
		if ("expandable" in $$props) $$invalidate(11, expandable = $$props.expandable);
	};

	$$self.$capture_state = () => ({
		getContext,
		setContext,
		contextKey,
		JSONArrow,
		JSONNode,
		JSONKey,
		key,
		keys,
		colon,
		label,
		isParentExpanded,
		isParentArray,
		isArray,
		bracketOpen,
		bracketClose,
		previewKeys,
		getKey,
		getValue,
		getPreviewValue,
		expanded,
		expandable,
		context,
		toggleExpand,
		expand,
		slicedKeys
	});

	$$self.$inject_state = $$props => {
		if ("key" in $$props) $$invalidate(12, key = $$props.key);
		if ("keys" in $$props) $$invalidate(17, keys = $$props.keys);
		if ("colon" in $$props) $$invalidate(18, colon = $$props.colon);
		if ("label" in $$props) $$invalidate(1, label = $$props.label);
		if ("isParentExpanded" in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
		if ("isArray" in $$props) $$invalidate(4, isArray = $$props.isArray);
		if ("bracketOpen" in $$props) $$invalidate(5, bracketOpen = $$props.bracketOpen);
		if ("bracketClose" in $$props) $$invalidate(6, bracketClose = $$props.bracketClose);
		if ("previewKeys" in $$props) $$invalidate(7, previewKeys = $$props.previewKeys);
		if ("getKey" in $$props) $$invalidate(8, getKey = $$props.getKey);
		if ("getValue" in $$props) $$invalidate(9, getValue = $$props.getValue);
		if ("getPreviewValue" in $$props) $$invalidate(10, getPreviewValue = $$props.getPreviewValue);
		if ("expanded" in $$props) $$invalidate(0, expanded = $$props.expanded);
		if ("expandable" in $$props) $$invalidate(11, expandable = $$props.expandable);
		if ("slicedKeys" in $$props) $$invalidate(13, slicedKeys = $$props.slicedKeys);
	};

	let slicedKeys;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*isParentExpanded*/ 4) {
			 if (!isParentExpanded) {
				$$invalidate(0, expanded = false);
			}
		}

		if ($$self.$$.dirty & /*expanded, keys, previewKeys*/ 131201) {
			 $$invalidate(13, slicedKeys = expanded ? keys : previewKeys.slice(0, 5));
		}
	};

	return [
		expanded,
		label,
		isParentExpanded,
		isParentArray,
		isArray,
		bracketOpen,
		bracketClose,
		previewKeys,
		getKey,
		getValue,
		getPreviewValue,
		expandable,
		key,
		slicedKeys,
		context,
		toggleExpand,
		expand,
		keys,
		colon
	];
}

class JSONNested extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
			key: 12,
			keys: 17,
			colon: 18,
			label: 1,
			isParentExpanded: 2,
			isParentArray: 3,
			isArray: 4,
			bracketOpen: 5,
			bracketClose: 6,
			previewKeys: 7,
			getKey: 8,
			getValue: 9,
			getPreviewValue: 10,
			expanded: 0,
			expandable: 11
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "JSONNested",
			options,
			id: create_fragment$2.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*key*/ ctx[12] === undefined && !("key" in props)) {
			console.warn("<JSONNested> was created without expected prop 'key'");
		}

		if (/*keys*/ ctx[17] === undefined && !("keys" in props)) {
			console.warn("<JSONNested> was created without expected prop 'keys'");
		}

		if (/*isParentExpanded*/ ctx[2] === undefined && !("isParentExpanded" in props)) {
			console.warn("<JSONNested> was created without expected prop 'isParentExpanded'");
		}

		if (/*isParentArray*/ ctx[3] === undefined && !("isParentArray" in props)) {
			console.warn("<JSONNested> was created without expected prop 'isParentArray'");
		}

		if (/*bracketOpen*/ ctx[5] === undefined && !("bracketOpen" in props)) {
			console.warn("<JSONNested> was created without expected prop 'bracketOpen'");
		}

		if (/*bracketClose*/ ctx[6] === undefined && !("bracketClose" in props)) {
			console.warn("<JSONNested> was created without expected prop 'bracketClose'");
		}
	}

	get key() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get keys() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set keys(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get colon() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set colon(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get label() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set label(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentExpanded() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentExpanded(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentArray() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentArray(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isArray() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isArray(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get bracketOpen() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set bracketOpen(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get bracketClose() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set bracketClose(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get previewKeys() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set previewKeys(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getKey() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getKey(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getValue() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getValue(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getPreviewValue() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getPreviewValue(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get expanded() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set expanded(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get expandable() {
		throw new Error("<JSONNested>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set expandable(value) {
		throw new Error("<JSONNested>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules/svelte-json-tree/src/JSONObjectNode.svelte generated by Svelte v3.23.2 */

const { Object: Object_1 } = globals;

function create_fragment$3(ctx) {
	let jsonnested;
	let current;

	jsonnested = new JSONNested({
			props: {
				key: /*key*/ ctx[0],
				expanded: /*expanded*/ ctx[4],
				isParentExpanded: /*isParentExpanded*/ ctx[1],
				isParentArray: /*isParentArray*/ ctx[2],
				keys: /*keys*/ ctx[5],
				previewKeys: /*keys*/ ctx[5],
				getValue: /*getValue*/ ctx[6],
				label: "" + (/*nodeType*/ ctx[3] + " "),
				bracketOpen: "{",
				bracketClose: "}"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(jsonnested.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(jsonnested.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(jsonnested, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const jsonnested_changes = {};
			if (dirty & /*key*/ 1) jsonnested_changes.key = /*key*/ ctx[0];
			if (dirty & /*expanded*/ 16) jsonnested_changes.expanded = /*expanded*/ ctx[4];
			if (dirty & /*isParentExpanded*/ 2) jsonnested_changes.isParentExpanded = /*isParentExpanded*/ ctx[1];
			if (dirty & /*isParentArray*/ 4) jsonnested_changes.isParentArray = /*isParentArray*/ ctx[2];
			if (dirty & /*keys*/ 32) jsonnested_changes.keys = /*keys*/ ctx[5];
			if (dirty & /*keys*/ 32) jsonnested_changes.previewKeys = /*keys*/ ctx[5];
			if (dirty & /*nodeType*/ 8) jsonnested_changes.label = "" + (/*nodeType*/ ctx[3] + " ");
			jsonnested.$set(jsonnested_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jsonnested.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jsonnested.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(jsonnested, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	let { key } = $$props,
		{ value } = $$props,
		{ isParentExpanded } = $$props,
		{ isParentArray } = $$props,
		{ nodeType } = $$props;

	let { expanded = false } = $$props;

	function getValue(key) {
		return value[key];
	}

	const writable_props = ["key", "value", "isParentExpanded", "isParentArray", "nodeType", "expanded"];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<JSONObjectNode> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("JSONObjectNode", $$slots, []);

	$$self.$set = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(7, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
		if ("nodeType" in $$props) $$invalidate(3, nodeType = $$props.nodeType);
		if ("expanded" in $$props) $$invalidate(4, expanded = $$props.expanded);
	};

	$$self.$capture_state = () => ({
		JSONNested,
		key,
		value,
		isParentExpanded,
		isParentArray,
		nodeType,
		expanded,
		getValue,
		keys
	});

	$$self.$inject_state = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(7, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
		if ("nodeType" in $$props) $$invalidate(3, nodeType = $$props.nodeType);
		if ("expanded" in $$props) $$invalidate(4, expanded = $$props.expanded);
		if ("keys" in $$props) $$invalidate(5, keys = $$props.keys);
	};

	let keys;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value*/ 128) {
			 $$invalidate(5, keys = Object.getOwnPropertyNames(value));
		}
	};

	return [
		key,
		isParentExpanded,
		isParentArray,
		nodeType,
		expanded,
		keys,
		getValue,
		value
	];
}

class JSONObjectNode extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$3, create_fragment$3, safe_not_equal, {
			key: 0,
			value: 7,
			isParentExpanded: 1,
			isParentArray: 2,
			nodeType: 3,
			expanded: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "JSONObjectNode",
			options,
			id: create_fragment$3.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*key*/ ctx[0] === undefined && !("key" in props)) {
			console.warn("<JSONObjectNode> was created without expected prop 'key'");
		}

		if (/*value*/ ctx[7] === undefined && !("value" in props)) {
			console.warn("<JSONObjectNode> was created without expected prop 'value'");
		}

		if (/*isParentExpanded*/ ctx[1] === undefined && !("isParentExpanded" in props)) {
			console.warn("<JSONObjectNode> was created without expected prop 'isParentExpanded'");
		}

		if (/*isParentArray*/ ctx[2] === undefined && !("isParentArray" in props)) {
			console.warn("<JSONObjectNode> was created without expected prop 'isParentArray'");
		}

		if (/*nodeType*/ ctx[3] === undefined && !("nodeType" in props)) {
			console.warn("<JSONObjectNode> was created without expected prop 'nodeType'");
		}
	}

	get key() {
		throw new Error("<JSONObjectNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<JSONObjectNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<JSONObjectNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<JSONObjectNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentExpanded() {
		throw new Error("<JSONObjectNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentExpanded(value) {
		throw new Error("<JSONObjectNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentArray() {
		throw new Error("<JSONObjectNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentArray(value) {
		throw new Error("<JSONObjectNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get nodeType() {
		throw new Error("<JSONObjectNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set nodeType(value) {
		throw new Error("<JSONObjectNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get expanded() {
		throw new Error("<JSONObjectNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set expanded(value) {
		throw new Error("<JSONObjectNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules/svelte-json-tree/src/JSONArrayNode.svelte generated by Svelte v3.23.2 */

const { Object: Object_1$1 } = globals;

function create_fragment$4(ctx) {
	let jsonnested;
	let current;

	jsonnested = new JSONNested({
			props: {
				key: /*key*/ ctx[0],
				expanded: /*expanded*/ ctx[4],
				isParentExpanded: /*isParentExpanded*/ ctx[2],
				isParentArray: /*isParentArray*/ ctx[3],
				isArray: true,
				keys: /*keys*/ ctx[5],
				previewKeys: /*previewKeys*/ ctx[6],
				getValue: /*getValue*/ ctx[7],
				label: "Array(" + /*value*/ ctx[1].length + ")",
				bracketOpen: "[",
				bracketClose: "]"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(jsonnested.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(jsonnested.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(jsonnested, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const jsonnested_changes = {};
			if (dirty & /*key*/ 1) jsonnested_changes.key = /*key*/ ctx[0];
			if (dirty & /*expanded*/ 16) jsonnested_changes.expanded = /*expanded*/ ctx[4];
			if (dirty & /*isParentExpanded*/ 4) jsonnested_changes.isParentExpanded = /*isParentExpanded*/ ctx[2];
			if (dirty & /*isParentArray*/ 8) jsonnested_changes.isParentArray = /*isParentArray*/ ctx[3];
			if (dirty & /*keys*/ 32) jsonnested_changes.keys = /*keys*/ ctx[5];
			if (dirty & /*previewKeys*/ 64) jsonnested_changes.previewKeys = /*previewKeys*/ ctx[6];
			if (dirty & /*value*/ 2) jsonnested_changes.label = "Array(" + /*value*/ ctx[1].length + ")";
			jsonnested.$set(jsonnested_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jsonnested.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jsonnested.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(jsonnested, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$4($$self, $$props, $$invalidate) {
	let { key } = $$props,
		{ value } = $$props,
		{ isParentExpanded } = $$props,
		{ isParentArray } = $$props;

	let { expanded = false } = $$props;
	const filteredKey = new Set(["length"]);

	function getValue(key) {
		return value[key];
	}

	const writable_props = ["key", "value", "isParentExpanded", "isParentArray", "expanded"];

	Object_1$1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<JSONArrayNode> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("JSONArrayNode", $$slots, []);

	$$self.$set = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(1, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
		if ("expanded" in $$props) $$invalidate(4, expanded = $$props.expanded);
	};

	$$self.$capture_state = () => ({
		JSONNested,
		key,
		value,
		isParentExpanded,
		isParentArray,
		expanded,
		filteredKey,
		getValue,
		keys,
		previewKeys
	});

	$$self.$inject_state = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(1, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
		if ("expanded" in $$props) $$invalidate(4, expanded = $$props.expanded);
		if ("keys" in $$props) $$invalidate(5, keys = $$props.keys);
		if ("previewKeys" in $$props) $$invalidate(6, previewKeys = $$props.previewKeys);
	};

	let keys;
	let previewKeys;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value*/ 2) {
			 $$invalidate(5, keys = Object.getOwnPropertyNames(value));
		}

		if ($$self.$$.dirty & /*keys*/ 32) {
			 $$invalidate(6, previewKeys = keys.filter(key => !filteredKey.has(key)));
		}
	};

	return [
		key,
		value,
		isParentExpanded,
		isParentArray,
		expanded,
		keys,
		previewKeys,
		getValue
	];
}

class JSONArrayNode extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$4, create_fragment$4, safe_not_equal, {
			key: 0,
			value: 1,
			isParentExpanded: 2,
			isParentArray: 3,
			expanded: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "JSONArrayNode",
			options,
			id: create_fragment$4.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*key*/ ctx[0] === undefined && !("key" in props)) {
			console.warn("<JSONArrayNode> was created without expected prop 'key'");
		}

		if (/*value*/ ctx[1] === undefined && !("value" in props)) {
			console.warn("<JSONArrayNode> was created without expected prop 'value'");
		}

		if (/*isParentExpanded*/ ctx[2] === undefined && !("isParentExpanded" in props)) {
			console.warn("<JSONArrayNode> was created without expected prop 'isParentExpanded'");
		}

		if (/*isParentArray*/ ctx[3] === undefined && !("isParentArray" in props)) {
			console.warn("<JSONArrayNode> was created without expected prop 'isParentArray'");
		}
	}

	get key() {
		throw new Error("<JSONArrayNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<JSONArrayNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<JSONArrayNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<JSONArrayNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentExpanded() {
		throw new Error("<JSONArrayNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentExpanded(value) {
		throw new Error("<JSONArrayNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentArray() {
		throw new Error("<JSONArrayNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentArray(value) {
		throw new Error("<JSONArrayNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get expanded() {
		throw new Error("<JSONArrayNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set expanded(value) {
		throw new Error("<JSONArrayNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules/svelte-json-tree/src/JSONIterableArrayNode.svelte generated by Svelte v3.23.2 */

function create_fragment$5(ctx) {
	let jsonnested;
	let current;

	jsonnested = new JSONNested({
			props: {
				key: /*key*/ ctx[0],
				isParentExpanded: /*isParentExpanded*/ ctx[1],
				isParentArray: /*isParentArray*/ ctx[2],
				keys: /*keys*/ ctx[4],
				getKey,
				getValue,
				isArray: true,
				label: "" + (/*nodeType*/ ctx[3] + "(" + /*keys*/ ctx[4].length + ")"),
				bracketOpen: "{",
				bracketClose: "}"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(jsonnested.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(jsonnested.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(jsonnested, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const jsonnested_changes = {};
			if (dirty & /*key*/ 1) jsonnested_changes.key = /*key*/ ctx[0];
			if (dirty & /*isParentExpanded*/ 2) jsonnested_changes.isParentExpanded = /*isParentExpanded*/ ctx[1];
			if (dirty & /*isParentArray*/ 4) jsonnested_changes.isParentArray = /*isParentArray*/ ctx[2];
			if (dirty & /*keys*/ 16) jsonnested_changes.keys = /*keys*/ ctx[4];
			if (dirty & /*nodeType, keys*/ 24) jsonnested_changes.label = "" + (/*nodeType*/ ctx[3] + "(" + /*keys*/ ctx[4].length + ")");
			jsonnested.$set(jsonnested_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jsonnested.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jsonnested.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(jsonnested, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function getKey(key) {
	return String(key[0]);
}

function getValue(key) {
	return key[1];
}

function instance$5($$self, $$props, $$invalidate) {
	let { key } = $$props,
		{ value } = $$props,
		{ isParentExpanded } = $$props,
		{ isParentArray } = $$props,
		{ nodeType } = $$props;

	let keys = [];
	const writable_props = ["key", "value", "isParentExpanded", "isParentArray", "nodeType"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<JSONIterableArrayNode> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("JSONIterableArrayNode", $$slots, []);

	$$self.$set = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(5, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
		if ("nodeType" in $$props) $$invalidate(3, nodeType = $$props.nodeType);
	};

	$$self.$capture_state = () => ({
		JSONNested,
		key,
		value,
		isParentExpanded,
		isParentArray,
		nodeType,
		keys,
		getKey,
		getValue
	});

	$$self.$inject_state = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(5, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
		if ("nodeType" in $$props) $$invalidate(3, nodeType = $$props.nodeType);
		if ("keys" in $$props) $$invalidate(4, keys = $$props.keys);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value*/ 32) {
			 {
				let result = [];
				let i = 0;

				for (const entry of value) {
					result.push([i++, entry]);
				}

				$$invalidate(4, keys = result);
			}
		}
	};

	return [key, isParentExpanded, isParentArray, nodeType, keys, value];
}

class JSONIterableArrayNode extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$5, create_fragment$5, safe_not_equal, {
			key: 0,
			value: 5,
			isParentExpanded: 1,
			isParentArray: 2,
			nodeType: 3
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "JSONIterableArrayNode",
			options,
			id: create_fragment$5.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*key*/ ctx[0] === undefined && !("key" in props)) {
			console.warn("<JSONIterableArrayNode> was created without expected prop 'key'");
		}

		if (/*value*/ ctx[5] === undefined && !("value" in props)) {
			console.warn("<JSONIterableArrayNode> was created without expected prop 'value'");
		}

		if (/*isParentExpanded*/ ctx[1] === undefined && !("isParentExpanded" in props)) {
			console.warn("<JSONIterableArrayNode> was created without expected prop 'isParentExpanded'");
		}

		if (/*isParentArray*/ ctx[2] === undefined && !("isParentArray" in props)) {
			console.warn("<JSONIterableArrayNode> was created without expected prop 'isParentArray'");
		}

		if (/*nodeType*/ ctx[3] === undefined && !("nodeType" in props)) {
			console.warn("<JSONIterableArrayNode> was created without expected prop 'nodeType'");
		}
	}

	get key() {
		throw new Error("<JSONIterableArrayNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<JSONIterableArrayNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<JSONIterableArrayNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<JSONIterableArrayNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentExpanded() {
		throw new Error("<JSONIterableArrayNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentExpanded(value) {
		throw new Error("<JSONIterableArrayNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentArray() {
		throw new Error("<JSONIterableArrayNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentArray(value) {
		throw new Error("<JSONIterableArrayNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get nodeType() {
		throw new Error("<JSONIterableArrayNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set nodeType(value) {
		throw new Error("<JSONIterableArrayNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

class MapEntry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

/* node_modules/svelte-json-tree/src/JSONIterableMapNode.svelte generated by Svelte v3.23.2 */

function create_fragment$6(ctx) {
	let jsonnested;
	let current;

	jsonnested = new JSONNested({
			props: {
				key: /*key*/ ctx[0],
				isParentExpanded: /*isParentExpanded*/ ctx[1],
				isParentArray: /*isParentArray*/ ctx[2],
				keys: /*keys*/ ctx[4],
				getKey: getKey$1,
				getValue: getValue$1,
				label: "" + (/*nodeType*/ ctx[3] + "(" + /*keys*/ ctx[4].length + ")"),
				colon: "",
				bracketOpen: "{",
				bracketClose: "}"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(jsonnested.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(jsonnested.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(jsonnested, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const jsonnested_changes = {};
			if (dirty & /*key*/ 1) jsonnested_changes.key = /*key*/ ctx[0];
			if (dirty & /*isParentExpanded*/ 2) jsonnested_changes.isParentExpanded = /*isParentExpanded*/ ctx[1];
			if (dirty & /*isParentArray*/ 4) jsonnested_changes.isParentArray = /*isParentArray*/ ctx[2];
			if (dirty & /*keys*/ 16) jsonnested_changes.keys = /*keys*/ ctx[4];
			if (dirty & /*nodeType, keys*/ 24) jsonnested_changes.label = "" + (/*nodeType*/ ctx[3] + "(" + /*keys*/ ctx[4].length + ")");
			jsonnested.$set(jsonnested_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jsonnested.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jsonnested.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(jsonnested, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$6.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function getKey$1(entry) {
	return entry[0];
}

function getValue$1(entry) {
	return entry[1];
}

function instance$6($$self, $$props, $$invalidate) {
	let { key } = $$props,
		{ value } = $$props,
		{ isParentExpanded } = $$props,
		{ isParentArray } = $$props,
		{ nodeType } = $$props;

	let keys = [];
	const writable_props = ["key", "value", "isParentExpanded", "isParentArray", "nodeType"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<JSONIterableMapNode> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("JSONIterableMapNode", $$slots, []);

	$$self.$set = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(5, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
		if ("nodeType" in $$props) $$invalidate(3, nodeType = $$props.nodeType);
	};

	$$self.$capture_state = () => ({
		JSONNested,
		MapEntry,
		key,
		value,
		isParentExpanded,
		isParentArray,
		nodeType,
		keys,
		getKey: getKey$1,
		getValue: getValue$1
	});

	$$self.$inject_state = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(5, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
		if ("nodeType" in $$props) $$invalidate(3, nodeType = $$props.nodeType);
		if ("keys" in $$props) $$invalidate(4, keys = $$props.keys);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value*/ 32) {
			 {
				let result = [];
				let i = 0;

				for (const entry of value) {
					result.push([i++, new MapEntry(entry[0], entry[1])]);
				}

				$$invalidate(4, keys = result);
			}
		}
	};

	return [key, isParentExpanded, isParentArray, nodeType, keys, value];
}

class JSONIterableMapNode extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$6, create_fragment$6, safe_not_equal, {
			key: 0,
			value: 5,
			isParentExpanded: 1,
			isParentArray: 2,
			nodeType: 3
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "JSONIterableMapNode",
			options,
			id: create_fragment$6.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*key*/ ctx[0] === undefined && !("key" in props)) {
			console.warn("<JSONIterableMapNode> was created without expected prop 'key'");
		}

		if (/*value*/ ctx[5] === undefined && !("value" in props)) {
			console.warn("<JSONIterableMapNode> was created without expected prop 'value'");
		}

		if (/*isParentExpanded*/ ctx[1] === undefined && !("isParentExpanded" in props)) {
			console.warn("<JSONIterableMapNode> was created without expected prop 'isParentExpanded'");
		}

		if (/*isParentArray*/ ctx[2] === undefined && !("isParentArray" in props)) {
			console.warn("<JSONIterableMapNode> was created without expected prop 'isParentArray'");
		}

		if (/*nodeType*/ ctx[3] === undefined && !("nodeType" in props)) {
			console.warn("<JSONIterableMapNode> was created without expected prop 'nodeType'");
		}
	}

	get key() {
		throw new Error("<JSONIterableMapNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<JSONIterableMapNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<JSONIterableMapNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<JSONIterableMapNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentExpanded() {
		throw new Error("<JSONIterableMapNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentExpanded(value) {
		throw new Error("<JSONIterableMapNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentArray() {
		throw new Error("<JSONIterableMapNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentArray(value) {
		throw new Error("<JSONIterableMapNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get nodeType() {
		throw new Error("<JSONIterableMapNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set nodeType(value) {
		throw new Error("<JSONIterableMapNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules/svelte-json-tree/src/JSONMapEntryNode.svelte generated by Svelte v3.23.2 */

function create_fragment$7(ctx) {
	let jsonnested;
	let current;

	jsonnested = new JSONNested({
			props: {
				expanded: /*expanded*/ ctx[4],
				isParentExpanded: /*isParentExpanded*/ ctx[2],
				isParentArray: /*isParentArray*/ ctx[3],
				key: /*isParentExpanded*/ ctx[2]
				? String(/*key*/ ctx[0])
				: /*value*/ ctx[1].key,
				keys: /*keys*/ ctx[5],
				getValue: /*getValue*/ ctx[6],
				label: /*isParentExpanded*/ ctx[2] ? "Entry " : "=> ",
				bracketOpen: "{",
				bracketClose: "}"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(jsonnested.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(jsonnested.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(jsonnested, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const jsonnested_changes = {};
			if (dirty & /*expanded*/ 16) jsonnested_changes.expanded = /*expanded*/ ctx[4];
			if (dirty & /*isParentExpanded*/ 4) jsonnested_changes.isParentExpanded = /*isParentExpanded*/ ctx[2];
			if (dirty & /*isParentArray*/ 8) jsonnested_changes.isParentArray = /*isParentArray*/ ctx[3];

			if (dirty & /*isParentExpanded, key, value*/ 7) jsonnested_changes.key = /*isParentExpanded*/ ctx[2]
			? String(/*key*/ ctx[0])
			: /*value*/ ctx[1].key;

			if (dirty & /*isParentExpanded*/ 4) jsonnested_changes.label = /*isParentExpanded*/ ctx[2] ? "Entry " : "=> ";
			jsonnested.$set(jsonnested_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jsonnested.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jsonnested.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(jsonnested, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$7.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$7($$self, $$props, $$invalidate) {
	let { key } = $$props,
		{ value } = $$props,
		{ isParentExpanded } = $$props,
		{ isParentArray } = $$props;

	let { expanded = false } = $$props;
	const keys = ["key", "value"];

	function getValue(key) {
		return value[key];
	}

	const writable_props = ["key", "value", "isParentExpanded", "isParentArray", "expanded"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<JSONMapEntryNode> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("JSONMapEntryNode", $$slots, []);

	$$self.$set = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(1, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
		if ("expanded" in $$props) $$invalidate(4, expanded = $$props.expanded);
	};

	$$self.$capture_state = () => ({
		JSONNested,
		key,
		value,
		isParentExpanded,
		isParentArray,
		expanded,
		keys,
		getValue
	});

	$$self.$inject_state = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(1, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
		if ("expanded" in $$props) $$invalidate(4, expanded = $$props.expanded);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [key, value, isParentExpanded, isParentArray, expanded, keys, getValue];
}

class JSONMapEntryNode extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$7, create_fragment$7, safe_not_equal, {
			key: 0,
			value: 1,
			isParentExpanded: 2,
			isParentArray: 3,
			expanded: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "JSONMapEntryNode",
			options,
			id: create_fragment$7.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*key*/ ctx[0] === undefined && !("key" in props)) {
			console.warn("<JSONMapEntryNode> was created without expected prop 'key'");
		}

		if (/*value*/ ctx[1] === undefined && !("value" in props)) {
			console.warn("<JSONMapEntryNode> was created without expected prop 'value'");
		}

		if (/*isParentExpanded*/ ctx[2] === undefined && !("isParentExpanded" in props)) {
			console.warn("<JSONMapEntryNode> was created without expected prop 'isParentExpanded'");
		}

		if (/*isParentArray*/ ctx[3] === undefined && !("isParentArray" in props)) {
			console.warn("<JSONMapEntryNode> was created without expected prop 'isParentArray'");
		}
	}

	get key() {
		throw new Error("<JSONMapEntryNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<JSONMapEntryNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<JSONMapEntryNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<JSONMapEntryNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentExpanded() {
		throw new Error("<JSONMapEntryNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentExpanded(value) {
		throw new Error("<JSONMapEntryNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentArray() {
		throw new Error("<JSONMapEntryNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentArray(value) {
		throw new Error("<JSONMapEntryNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get expanded() {
		throw new Error("<JSONMapEntryNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set expanded(value) {
		throw new Error("<JSONMapEntryNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules/svelte-json-tree/src/JSONValueNode.svelte generated by Svelte v3.23.2 */
const file$3 = "node_modules/svelte-json-tree/src/JSONValueNode.svelte";

function create_fragment$8(ctx) {
	let li;
	let jsonkey;
	let t0;
	let span;

	let t1_value = (/*valueGetter*/ ctx[2]
	? /*valueGetter*/ ctx[2](/*value*/ ctx[1])
	: /*value*/ ctx[1]) + "";

	let t1;
	let span_class_value;
	let current;

	jsonkey = new JSONKey({
			props: {
				key: /*key*/ ctx[0],
				colon: /*colon*/ ctx[6],
				isParentExpanded: /*isParentExpanded*/ ctx[3],
				isParentArray: /*isParentArray*/ ctx[4]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			li = element("li");
			create_component(jsonkey.$$.fragment);
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			claim_component(jsonkey.$$.fragment, li_nodes);
			t0 = claim_space(li_nodes);
			span = claim_element(li_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", span_class_value = "" + (null_to_empty(/*nodeType*/ ctx[5]) + " svelte-3bjyvl"));
			add_location(span, file$3, 47, 2, 948);
			attr_dev(li, "class", "svelte-3bjyvl");
			toggle_class(li, "indent", /*isParentExpanded*/ ctx[3]);
			add_location(li, file$3, 45, 0, 846);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			mount_component(jsonkey, li, null);
			append_dev(li, t0);
			append_dev(li, span);
			append_dev(span, t1);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const jsonkey_changes = {};
			if (dirty & /*key*/ 1) jsonkey_changes.key = /*key*/ ctx[0];
			if (dirty & /*isParentExpanded*/ 8) jsonkey_changes.isParentExpanded = /*isParentExpanded*/ ctx[3];
			if (dirty & /*isParentArray*/ 16) jsonkey_changes.isParentArray = /*isParentArray*/ ctx[4];
			jsonkey.$set(jsonkey_changes);

			if ((!current || dirty & /*valueGetter, value*/ 6) && t1_value !== (t1_value = (/*valueGetter*/ ctx[2]
			? /*valueGetter*/ ctx[2](/*value*/ ctx[1])
			: /*value*/ ctx[1]) + "")) set_data_dev(t1, t1_value);

			if (!current || dirty & /*nodeType*/ 32 && span_class_value !== (span_class_value = "" + (null_to_empty(/*nodeType*/ ctx[5]) + " svelte-3bjyvl"))) {
				attr_dev(span, "class", span_class_value);
			}

			if (dirty & /*isParentExpanded*/ 8) {
				toggle_class(li, "indent", /*isParentExpanded*/ ctx[3]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jsonkey.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jsonkey.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			destroy_component(jsonkey);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$8.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$8($$self, $$props, $$invalidate) {
	let { key } = $$props,
		{ value } = $$props,
		{ valueGetter = null } = $$props,
		{ isParentExpanded } = $$props,
		{ isParentArray } = $$props,
		{ nodeType } = $$props;

	const { colon } = getContext(contextKey);
	const writable_props = ["key", "value", "valueGetter", "isParentExpanded", "isParentArray", "nodeType"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<JSONValueNode> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("JSONValueNode", $$slots, []);

	$$self.$set = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(1, value = $$props.value);
		if ("valueGetter" in $$props) $$invalidate(2, valueGetter = $$props.valueGetter);
		if ("isParentExpanded" in $$props) $$invalidate(3, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
		if ("nodeType" in $$props) $$invalidate(5, nodeType = $$props.nodeType);
	};

	$$self.$capture_state = () => ({
		getContext,
		contextKey,
		JSONKey,
		key,
		value,
		valueGetter,
		isParentExpanded,
		isParentArray,
		nodeType,
		colon
	});

	$$self.$inject_state = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(1, value = $$props.value);
		if ("valueGetter" in $$props) $$invalidate(2, valueGetter = $$props.valueGetter);
		if ("isParentExpanded" in $$props) $$invalidate(3, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
		if ("nodeType" in $$props) $$invalidate(5, nodeType = $$props.nodeType);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [key, value, valueGetter, isParentExpanded, isParentArray, nodeType, colon];
}

class JSONValueNode extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$8, create_fragment$8, safe_not_equal, {
			key: 0,
			value: 1,
			valueGetter: 2,
			isParentExpanded: 3,
			isParentArray: 4,
			nodeType: 5
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "JSONValueNode",
			options,
			id: create_fragment$8.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*key*/ ctx[0] === undefined && !("key" in props)) {
			console.warn("<JSONValueNode> was created without expected prop 'key'");
		}

		if (/*value*/ ctx[1] === undefined && !("value" in props)) {
			console.warn("<JSONValueNode> was created without expected prop 'value'");
		}

		if (/*isParentExpanded*/ ctx[3] === undefined && !("isParentExpanded" in props)) {
			console.warn("<JSONValueNode> was created without expected prop 'isParentExpanded'");
		}

		if (/*isParentArray*/ ctx[4] === undefined && !("isParentArray" in props)) {
			console.warn("<JSONValueNode> was created without expected prop 'isParentArray'");
		}

		if (/*nodeType*/ ctx[5] === undefined && !("nodeType" in props)) {
			console.warn("<JSONValueNode> was created without expected prop 'nodeType'");
		}
	}

	get key() {
		throw new Error("<JSONValueNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<JSONValueNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<JSONValueNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<JSONValueNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get valueGetter() {
		throw new Error("<JSONValueNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set valueGetter(value) {
		throw new Error("<JSONValueNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentExpanded() {
		throw new Error("<JSONValueNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentExpanded(value) {
		throw new Error("<JSONValueNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentArray() {
		throw new Error("<JSONValueNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentArray(value) {
		throw new Error("<JSONValueNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get nodeType() {
		throw new Error("<JSONValueNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set nodeType(value) {
		throw new Error("<JSONValueNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules/svelte-json-tree/src/ErrorNode.svelte generated by Svelte v3.23.2 */
const file$4 = "node_modules/svelte-json-tree/src/ErrorNode.svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	child_ctx[10] = i;
	return child_ctx;
}

// (40:2) {#if isParentExpanded}
function create_if_block_2$1(ctx) {
	let jsonarrow;
	let current;

	jsonarrow = new JSONArrow({
			props: { expanded: /*expanded*/ ctx[0] },
			$$inline: true
		});

	jsonarrow.$on("click", /*toggleExpand*/ ctx[7]);

	const block = {
		c: function create() {
			create_component(jsonarrow.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(jsonarrow.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(jsonarrow, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const jsonarrow_changes = {};
			if (dirty & /*expanded*/ 1) jsonarrow_changes.expanded = /*expanded*/ ctx[0];
			jsonarrow.$set(jsonarrow_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jsonarrow.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jsonarrow.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(jsonarrow, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2$1.name,
		type: "if",
		source: "(40:2) {#if isParentExpanded}",
		ctx
	});

	return block;
}

// (45:2) {#if isParentExpanded}
function create_if_block$2(ctx) {
	let ul;
	let current;
	let if_block = /*expanded*/ ctx[0] && create_if_block_1$1(ctx);

	const block = {
		c: function create() {
			ul = element("ul");
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			if (if_block) if_block.l(ul_nodes);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(ul, "class", "svelte-1ca3gb2");
			toggle_class(ul, "collapse", !/*expanded*/ ctx[0]);
			add_location(ul, file$4, 45, 4, 1134);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);
			if (if_block) if_block.m(ul, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*expanded*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*expanded*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_1$1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(ul, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (dirty & /*expanded*/ 1) {
				toggle_class(ul, "collapse", !/*expanded*/ ctx[0]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
			if (if_block) if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$2.name,
		type: "if",
		source: "(45:2) {#if isParentExpanded}",
		ctx
	});

	return block;
}

// (47:6) {#if expanded}
function create_if_block_1$1(ctx) {
	let jsonnode;
	let t0;
	let li;
	let jsonkey;
	let t1;
	let span;
	let current;

	jsonnode = new JSONNode({
			props: {
				key: "message",
				value: /*value*/ ctx[2].message
			},
			$$inline: true
		});

	jsonkey = new JSONKey({
			props: {
				key: "stack",
				colon: ":",
				isParentExpanded: /*isParentExpanded*/ ctx[3]
			},
			$$inline: true
		});

	let each_value = /*stack*/ ctx[5];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			create_component(jsonnode.$$.fragment);
			t0 = space();
			li = element("li");
			create_component(jsonkey.$$.fragment);
			t1 = space();
			span = element("span");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			claim_component(jsonnode.$$.fragment, nodes);
			t0 = claim_space(nodes);
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			claim_component(jsonkey.$$.fragment, li_nodes);
			t1 = claim_space(li_nodes);
			span = claim_element(li_nodes, "SPAN", {});
			var span_nodes = children(span);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(span_nodes);
			}

			span_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(span, file$4, 50, 10, 1330);
			attr_dev(li, "class", "svelte-1ca3gb2");
			add_location(li, file$4, 48, 8, 1252);
		},
		m: function mount(target, anchor) {
			mount_component(jsonnode, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, li, anchor);
			mount_component(jsonkey, li, null);
			append_dev(li, t1);
			append_dev(li, span);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(span, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			const jsonnode_changes = {};
			if (dirty & /*value*/ 4) jsonnode_changes.value = /*value*/ ctx[2].message;
			jsonnode.$set(jsonnode_changes);
			const jsonkey_changes = {};
			if (dirty & /*isParentExpanded*/ 8) jsonkey_changes.isParentExpanded = /*isParentExpanded*/ ctx[3];
			jsonkey.$set(jsonkey_changes);

			if (dirty & /*stack*/ 32) {
				each_value = /*stack*/ ctx[5];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(span, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jsonnode.$$.fragment, local);
			transition_in(jsonkey.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jsonnode.$$.fragment, local);
			transition_out(jsonkey.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(jsonnode, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(li);
			destroy_component(jsonkey);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1$1.name,
		type: "if",
		source: "(47:6) {#if expanded}",
		ctx
	});

	return block;
}

// (52:12) {#each stack as line, index}
function create_each_block$1(ctx) {
	let span;
	let t_value = /*line*/ ctx[8] + "";
	let t;
	let br;

	const block = {
		c: function create() {
			span = element("span");
			t = text(t_value);
			br = element("br");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach_dev);
			br = claim_element(nodes, "BR", {});
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "svelte-1ca3gb2");
			toggle_class(span, "indent", /*index*/ ctx[10] > 0);
			add_location(span, file$4, 52, 14, 1392);
			add_location(br, file$4, 52, 58, 1436);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
			insert_dev(target, br, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*stack*/ 32 && t_value !== (t_value = /*line*/ ctx[8] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			if (detaching) detach_dev(br);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(52:12) {#each stack as line, index}",
		ctx
	});

	return block;
}

function create_fragment$9(ctx) {
	let li;
	let t0;
	let jsonkey;
	let t1;
	let span;
	let t2;
	let t3_value = (/*expanded*/ ctx[0] ? "" : /*value*/ ctx[2].message) + "";
	let t3;
	let t4;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*isParentExpanded*/ ctx[3] && create_if_block_2$1(ctx);

	jsonkey = new JSONKey({
			props: {
				key: /*key*/ ctx[1],
				colon: /*context*/ ctx[6].colon,
				isParentExpanded: /*isParentExpanded*/ ctx[3],
				isParentArray: /*isParentArray*/ ctx[4]
			},
			$$inline: true
		});

	let if_block1 = /*isParentExpanded*/ ctx[3] && create_if_block$2(ctx);

	const block = {
		c: function create() {
			li = element("li");
			if (if_block0) if_block0.c();
			t0 = space();
			create_component(jsonkey.$$.fragment);
			t1 = space();
			span = element("span");
			t2 = text("Error: ");
			t3 = text(t3_value);
			t4 = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			if (if_block0) if_block0.l(li_nodes);
			t0 = claim_space(li_nodes);
			claim_component(jsonkey.$$.fragment, li_nodes);
			t1 = claim_space(li_nodes);
			span = claim_element(li_nodes, "SPAN", {});
			var span_nodes = children(span);
			t2 = claim_text(span_nodes, "Error: ");
			t3 = claim_text(span_nodes, t3_value);
			span_nodes.forEach(detach_dev);
			t4 = claim_space(li_nodes);
			if (if_block1) if_block1.l(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(span, file$4, 43, 2, 1033);
			attr_dev(li, "class", "svelte-1ca3gb2");
			toggle_class(li, "indent", /*isParentExpanded*/ ctx[3]);
			add_location(li, file$4, 38, 0, 831);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			if (if_block0) if_block0.m(li, null);
			append_dev(li, t0);
			mount_component(jsonkey, li, null);
			append_dev(li, t1);
			append_dev(li, span);
			append_dev(span, t2);
			append_dev(span, t3);
			append_dev(li, t4);
			if (if_block1) if_block1.m(li, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(span, "click", /*toggleExpand*/ ctx[7], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*isParentExpanded*/ ctx[3]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*isParentExpanded*/ 8) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_2$1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(li, t0);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			const jsonkey_changes = {};
			if (dirty & /*key*/ 2) jsonkey_changes.key = /*key*/ ctx[1];
			if (dirty & /*isParentExpanded*/ 8) jsonkey_changes.isParentExpanded = /*isParentExpanded*/ ctx[3];
			if (dirty & /*isParentArray*/ 16) jsonkey_changes.isParentArray = /*isParentArray*/ ctx[4];
			jsonkey.$set(jsonkey_changes);
			if ((!current || dirty & /*expanded, value*/ 5) && t3_value !== (t3_value = (/*expanded*/ ctx[0] ? "" : /*value*/ ctx[2].message) + "")) set_data_dev(t3, t3_value);

			if (/*isParentExpanded*/ ctx[3]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*isParentExpanded*/ 8) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block$2(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(li, null);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (dirty & /*isParentExpanded*/ 8) {
				toggle_class(li, "indent", /*isParentExpanded*/ ctx[3]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(jsonkey.$$.fragment, local);
			transition_in(if_block1);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			transition_out(jsonkey.$$.fragment, local);
			transition_out(if_block1);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			if (if_block0) if_block0.d();
			destroy_component(jsonkey);
			if (if_block1) if_block1.d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$9.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$9($$self, $$props, $$invalidate) {
	let { key } = $$props,
		{ value } = $$props,
		{ isParentExpanded } = $$props,
		{ isParentArray } = $$props;

	let { expanded = false } = $$props;
	const context = getContext(contextKey);
	setContext(contextKey, { ...context, colon: ":" });

	function toggleExpand() {
		$$invalidate(0, expanded = !expanded);
	}

	const writable_props = ["key", "value", "isParentExpanded", "isParentArray", "expanded"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ErrorNode> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ErrorNode", $$slots, []);

	$$self.$set = $$props => {
		if ("key" in $$props) $$invalidate(1, key = $$props.key);
		if ("value" in $$props) $$invalidate(2, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(3, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
		if ("expanded" in $$props) $$invalidate(0, expanded = $$props.expanded);
	};

	$$self.$capture_state = () => ({
		getContext,
		setContext,
		contextKey,
		JSONArrow,
		JSONNode,
		JSONKey,
		key,
		value,
		isParentExpanded,
		isParentArray,
		expanded,
		context,
		toggleExpand,
		stack
	});

	$$self.$inject_state = $$props => {
		if ("key" in $$props) $$invalidate(1, key = $$props.key);
		if ("value" in $$props) $$invalidate(2, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(3, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
		if ("expanded" in $$props) $$invalidate(0, expanded = $$props.expanded);
		if ("stack" in $$props) $$invalidate(5, stack = $$props.stack);
	};

	let stack;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value*/ 4) {
			 $$invalidate(5, stack = value.stack.split("\n"));
		}

		if ($$self.$$.dirty & /*isParentExpanded*/ 8) {
			 if (!isParentExpanded) {
				$$invalidate(0, expanded = false);
			}
		}
	};

	return [
		expanded,
		key,
		value,
		isParentExpanded,
		isParentArray,
		stack,
		context,
		toggleExpand
	];
}

class ErrorNode extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$9, create_fragment$9, safe_not_equal, {
			key: 1,
			value: 2,
			isParentExpanded: 3,
			isParentArray: 4,
			expanded: 0
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ErrorNode",
			options,
			id: create_fragment$9.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*key*/ ctx[1] === undefined && !("key" in props)) {
			console.warn("<ErrorNode> was created without expected prop 'key'");
		}

		if (/*value*/ ctx[2] === undefined && !("value" in props)) {
			console.warn("<ErrorNode> was created without expected prop 'value'");
		}

		if (/*isParentExpanded*/ ctx[3] === undefined && !("isParentExpanded" in props)) {
			console.warn("<ErrorNode> was created without expected prop 'isParentExpanded'");
		}

		if (/*isParentArray*/ ctx[4] === undefined && !("isParentArray" in props)) {
			console.warn("<ErrorNode> was created without expected prop 'isParentArray'");
		}
	}

	get key() {
		throw new Error("<ErrorNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<ErrorNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<ErrorNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<ErrorNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentExpanded() {
		throw new Error("<ErrorNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentExpanded(value) {
		throw new Error("<ErrorNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentArray() {
		throw new Error("<ErrorNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentArray(value) {
		throw new Error("<ErrorNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get expanded() {
		throw new Error("<ErrorNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set expanded(value) {
		throw new Error("<ErrorNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

function objType(obj) {
  const type = Object.prototype.toString.call(obj).slice(8, -1);
  if (type === 'Object') {
    if (typeof obj[Symbol.iterator] === 'function') {
      return 'Iterable';
    }
    return obj.constructor.name;
  }
  return type;
}

/* node_modules/svelte-json-tree/src/JSONNode.svelte generated by Svelte v3.23.2 */

function create_fragment$a(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;
	var switch_value = /*componentType*/ ctx[5];

	function switch_props(ctx) {
		return {
			props: {
				key: /*key*/ ctx[0],
				value: /*value*/ ctx[1],
				isParentExpanded: /*isParentExpanded*/ ctx[2],
				isParentArray: /*isParentArray*/ ctx[3],
				nodeType: /*nodeType*/ ctx[4],
				valueGetter: /*valueGetter*/ ctx[6]
			},
			$$inline: true
		};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	const block = {
		c: function create() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		l: function claim(nodes) {
			if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
			switch_instance_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert_dev(target, switch_instance_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const switch_instance_changes = {};
			if (dirty & /*key*/ 1) switch_instance_changes.key = /*key*/ ctx[0];
			if (dirty & /*value*/ 2) switch_instance_changes.value = /*value*/ ctx[1];
			if (dirty & /*isParentExpanded*/ 4) switch_instance_changes.isParentExpanded = /*isParentExpanded*/ ctx[2];
			if (dirty & /*isParentArray*/ 8) switch_instance_changes.isParentArray = /*isParentArray*/ ctx[3];
			if (dirty & /*nodeType*/ 16) switch_instance_changes.nodeType = /*nodeType*/ ctx[4];
			if (dirty & /*valueGetter*/ 64) switch_instance_changes.valueGetter = /*valueGetter*/ ctx[6];

			if (switch_value !== (switch_value = /*componentType*/ ctx[5])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i: function intro(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$a.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$a($$self, $$props, $$invalidate) {
	let { key } = $$props,
		{ value } = $$props,
		{ isParentExpanded } = $$props,
		{ isParentArray } = $$props;

	function getComponent(nodeType) {
		switch (nodeType) {
			case "Object":
				return JSONObjectNode;
			case "Error":
				return ErrorNode;
			case "Array":
				return JSONArrayNode;
			case "Iterable":
			case "Map":
			case "Set":
				return typeof value.set === "function"
				? JSONIterableMapNode
				: JSONIterableArrayNode;
			case "MapEntry":
				return JSONMapEntryNode;
			default:
				return JSONValueNode;
		}
	}

	function getValueGetter(nodeType) {
		switch (nodeType) {
			case "Object":
			case "Error":
			case "Array":
			case "Iterable":
			case "Map":
			case "Set":
			case "MapEntry":
			case "Number":
				return undefined;
			case "String":
				return raw => `"${raw}"`;
			case "Boolean":
				return raw => raw ? "true" : "false";
			case "Date":
				return raw => raw.toISOString();
			case "Null":
				return () => "null";
			case "Undefined":
				return () => "undefined";
			case "Function":
			case "Symbol":
				return raw => raw.toString();
			default:
				return () => `<${nodeType}>`;
		}
	}

	const writable_props = ["key", "value", "isParentExpanded", "isParentArray"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<JSONNode> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("JSONNode", $$slots, []);

	$$self.$set = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(1, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
	};

	$$self.$capture_state = () => ({
		JSONObjectNode,
		JSONArrayNode,
		JSONIterableArrayNode,
		JSONIterableMapNode,
		JSONMapEntryNode,
		JSONValueNode,
		ErrorNode,
		objType,
		key,
		value,
		isParentExpanded,
		isParentArray,
		getComponent,
		getValueGetter,
		nodeType,
		componentType,
		valueGetter
	});

	$$self.$inject_state = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(1, value = $$props.value);
		if ("isParentExpanded" in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
		if ("isParentArray" in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
		if ("nodeType" in $$props) $$invalidate(4, nodeType = $$props.nodeType);
		if ("componentType" in $$props) $$invalidate(5, componentType = $$props.componentType);
		if ("valueGetter" in $$props) $$invalidate(6, valueGetter = $$props.valueGetter);
	};

	let nodeType;
	let componentType;
	let valueGetter;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value*/ 2) {
			 $$invalidate(4, nodeType = objType(value));
		}

		if ($$self.$$.dirty & /*nodeType*/ 16) {
			 $$invalidate(5, componentType = getComponent(nodeType));
		}

		if ($$self.$$.dirty & /*nodeType*/ 16) {
			 $$invalidate(6, valueGetter = getValueGetter(nodeType));
		}
	};

	return [
		key,
		value,
		isParentExpanded,
		isParentArray,
		nodeType,
		componentType,
		valueGetter
	];
}

class JSONNode extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$a, create_fragment$a, safe_not_equal, {
			key: 0,
			value: 1,
			isParentExpanded: 2,
			isParentArray: 3
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "JSONNode",
			options,
			id: create_fragment$a.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*key*/ ctx[0] === undefined && !("key" in props)) {
			console.warn("<JSONNode> was created without expected prop 'key'");
		}

		if (/*value*/ ctx[1] === undefined && !("value" in props)) {
			console.warn("<JSONNode> was created without expected prop 'value'");
		}

		if (/*isParentExpanded*/ ctx[2] === undefined && !("isParentExpanded" in props)) {
			console.warn("<JSONNode> was created without expected prop 'isParentExpanded'");
		}

		if (/*isParentArray*/ ctx[3] === undefined && !("isParentArray" in props)) {
			console.warn("<JSONNode> was created without expected prop 'isParentArray'");
		}
	}

	get key() {
		throw new Error("<JSONNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<JSONNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<JSONNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<JSONNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentExpanded() {
		throw new Error("<JSONNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentExpanded(value) {
		throw new Error("<JSONNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isParentArray() {
		throw new Error("<JSONNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isParentArray(value) {
		throw new Error("<JSONNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules/svelte-json-tree/src/Root.svelte generated by Svelte v3.23.2 */
const file$5 = "node_modules/svelte-json-tree/src/Root.svelte";

function create_fragment$b(ctx) {
	let ul;
	let jsonnode;
	let current;

	jsonnode = new JSONNode({
			props: {
				key: /*key*/ ctx[0],
				value: /*value*/ ctx[1],
				isParentExpanded: true,
				isParentArray: false
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			ul = element("ul");
			create_component(jsonnode.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			claim_component(jsonnode.$$.fragment, ul_nodes);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(ul, "class", "svelte-773n60");
			add_location(ul, file$5, 37, 0, 1295);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);
			mount_component(jsonnode, ul, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const jsonnode_changes = {};
			if (dirty & /*key*/ 1) jsonnode_changes.key = /*key*/ ctx[0];
			if (dirty & /*value*/ 2) jsonnode_changes.value = /*value*/ ctx[1];
			jsonnode.$set(jsonnode_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jsonnode.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jsonnode.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
			destroy_component(jsonnode);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$b.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$b($$self, $$props, $$invalidate) {
	setContext(contextKey, {});
	let { key = "" } = $$props, { value } = $$props;
	const writable_props = ["key", "value"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Root> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Root", $$slots, []);

	$$self.$set = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(1, value = $$props.value);
	};

	$$self.$capture_state = () => ({
		JSONNode,
		setContext,
		contextKey,
		key,
		value
	});

	$$self.$inject_state = $$props => {
		if ("key" in $$props) $$invalidate(0, key = $$props.key);
		if ("value" in $$props) $$invalidate(1, value = $$props.value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [key, value];
}

class Root extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$b, create_fragment$b, safe_not_equal, { key: 0, value: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Root",
			options,
			id: create_fragment$b.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*value*/ ctx[1] === undefined && !("value" in props)) {
			console.warn("<Root> was created without expected prop 'value'");
		}
	}

	get key() {
		throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var yoneda_proof_tex = "\\begin{tikzpicture}\n\t[node distance=1.3cm,>=stealth',bend angle=45,auto]\n\t% set up the nodes\n\t\\node (2) at (-2,2) {$\\Hom{\\CategoryC}{A}{A}$};\n\t\\node (1) at (-2,-2) {$\\Hom{\\CategoryC}{A}{B}$};\n\t\\node (3) at (2,2) {$FA$};\n\t\\node (4) at (2,-2) {$FB$};\n\n\t\\node (2') at (-3.5,3) {$\\id{A}$};\n\t\\node (1') at (-3.5,-3) {$f$};\n\t\\node (3') at (3.5,3) {$x$};\n\t\\node (4') at (2,-3) {$\\tau_B(f)$};\n\t\\node (eq) at (2.7,-3) {$=$};\n\t\\node (5') at (3.5,-3) {$Ff(x)$};\n\n\t\\draw[->] (2)--(1) node [midway,right] {$\\Hom{\\CategoryC}{A}{f}$};\n\t\\draw[->] (2)--(3) node [midway,below] {$\\tau_A$};\n\t\\draw[->] (3)--(4) node [midway,left] {$Ff$};\n\t\\draw[->] (1)--(4) node [midway,above] {$\\tau_B$};\n\n\t\\draw[red, |->] (2')--(1') node [midway,left] {};\n\t\\draw[red, |->] (2')--(3') node [midway,above] {};\n\t\\draw[red, |->] (3')--(5') node [midway,right] {};\n\t\\draw[red, |->] (1')--(4') node [midway,below] {};\n\t%\\draw[->] (2)--(4) node [midway,above right] {$h$};\n\n\t\\begin{pgfonlayer}\n\t\t{background}\n\t\t\\filldraw [line width=4mm,join=round,\\backgrnd]\n\t\t([xshift=-3mm, yshift=1mm]2'.north -| 1'.west) rectangle ([xshift=0mm, yshift=-2mm]1'.south -| 5'.east);\n\t\\end{pgfonlayer}\n\n \\end{tikzpicture}\n";

/* src/routes/index.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file$6 = "src/routes/index.svelte";

function create_fragment$c(ctx) {
	let t0;
	let section;
	let div0;
	let textarea;
	let t1;
	let div1;
	let jsontree;
	let current;
	let mounted;
	let dispose;

	jsontree = new Root({
			props: { value: /*ast*/ ctx[1] },
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			div0 = element("div");
			textarea = element("textarea");
			t1 = space();
			div1 = element("div");
			create_component(jsontree.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-b4044k\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			textarea = claim_element(div0_nodes, "TEXTAREA", { class: true });
			children(textarea).forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(jsontree.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "ctviz";
			attr_dev(textarea, "class", "svelte-1v1vzpf");
			add_location(textarea, file$6, 18, 2, 340);
			attr_dev(div0, "class", "input svelte-1v1vzpf");
			add_location(div0, file$6, 17, 1, 318);
			attr_dev(div1, "class", "output svelte-1v1vzpf");
			add_location(div1, file$6, 20, 1, 380);
			attr_dev(section, "class", "svelte-1v1vzpf");
			add_location(section, file$6, 16, 0, 307);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, div0);
			append_dev(div0, textarea);
			set_input_value(textarea, /*text*/ ctx[0]);
			append_dev(section, t1);
			append_dev(section, div1);
			mount_component(jsontree, div1, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[2]);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*text*/ 1) {
				set_input_value(textarea, /*text*/ ctx[0]);
			}

			const jsontree_changes = {};
			if (dirty & /*ast*/ 2) jsontree_changes.value = /*ast*/ ctx[1];
			jsontree.$set(jsontree_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jsontree.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jsontree.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			destroy_component(jsontree);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$c.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$c($$self, $$props, $$invalidate) {
	let text = yoneda_proof_tex;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);

	function textarea_input_handler() {
		text = this.value;
		$$invalidate(0, text);
	}

	$$self.$capture_state = () => ({
		latexParser: main_1,
		JSONTree: Root,
		yoneda_proof_tex,
		text,
		ast
	});

	$$self.$inject_state = $$props => {
		if ("text" in $$props) $$invalidate(0, text = $$props.text);
		if ("ast" in $$props) $$invalidate(1, ast = $$props.ast);
	};

	let ast;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*text*/ 1) {
			 $$invalidate(1, ast = main_1.parse(text));
		}

		if ($$self.$$.dirty & /*ast*/ 2) {
			 console.log(ast);
		}
	};

	return [text, ast, textarea_input_handler];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$c, create_fragment$c, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$c.name
		});
	}
}

export default Routes;