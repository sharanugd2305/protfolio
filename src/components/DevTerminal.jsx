import { useState, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const COMMANDS = {
  about: { action: "scroll", target: "#home", output: "→ Navigating to About..." },
  projects: { action: "scroll", target: "#projects", output: "→ Navigating to Projects..." },
  skills: { action: "scroll", target: "#techstack", output: "→ Navigating to Tech Stack..." },
  contact: { action: "scroll", target: "#contact", output: "→ Navigating to Contact..." },
  resume: { action: "link", target: "#", output: "→ Opening resume..." }, // TODO: Update resume URL
  help: {
    action: "none",
    output: "Available commands: about, projects, skills, contact, resume, help, clear",
  },
};

export default function DevTerminal() {
  const revealRef = useScrollReveal();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: 'Welcome! Type "help" for available commands.' },
  ]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    const newHistory = [...history, { type: "input", text: `$ ${trimmed}` }];

    const command = COMMANDS[trimmed];
    if (command) {
      newHistory.push({ type: "output", text: command.output });
      setHistory(newHistory);

      if (command.action === "scroll") {
        setTimeout(() => {
          document.querySelector(command.target)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else if (command.action === "link") {
        setTimeout(() => {
          window.open(command.target, "_blank", "noopener");
        }, 300);
      }
    } else {
      newHistory.push({
        type: "error",
        text: `Command not found: ${trimmed}. Type "help" for available commands.`,
      });
      setHistory(newHistory);
    }

    // Auto-scroll terminal to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 50);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
    setInput("");
  };

  const handleSuggestionClick = (cmd) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  return (
    <div ref={revealRef} className="mx-auto max-w-4xl px-5 py-12">
      <div className="reveal">
        <div className="bg-base-850 border border-base-700/50 rounded-xl overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-base-800/80 border-b border-base-700/40">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs text-base-500 font-mono ml-2">terminal</span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="p-4 font-mono text-sm max-h-48 overflow-y-auto"
          >
            {history.map((entry, i) => (
              <div key={i} className={`mb-1 ${
                entry.type === "input" ? "text-base-200" :
                entry.type === "error" ? "text-red-400/80" :
                entry.type === "system" ? "text-base-500" :
                "text-accent/80"
              }`}>
                {entry.text}
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-1">
              <span className="text-accent/70 select-none">sharanu@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-base-100 outline-none caret-accent"
                placeholder="Type a command..."
                aria-label="Terminal command input"
                autoComplete="off"
                spellCheck="false"
              />
              <span className="w-2 h-4 bg-accent/60 animate-blink" aria-hidden="true" />
            </form>
          </div>

          {/* Quick commands */}
          <div className="px-4 py-2.5 border-t border-base-700/30 flex flex-wrap gap-1.5">
            {Object.keys(COMMANDS).filter(c => c !== "help").map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleSuggestionClick(cmd)}
                className="px-2.5 py-1 text-xs font-mono text-base-400 bg-base-700/40 rounded hover:text-accent hover:bg-accent/10 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
