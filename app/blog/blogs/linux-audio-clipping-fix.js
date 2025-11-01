import React from "react";

export default function LinuxVMAudioFix() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-text-light dark:text-text-dark">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        Fixing Audio Clipping in Ubuntu (22.04 – 25.x & Beyond)
      </h1>
      <p className="mb-4 text-lg">
        If you’ve been struggling with{" "}
        <strong>crackling, distorted, or broken audio</strong> on your Ubuntu
        virtual machine — especially on VMware — you’re not alone. I spent over
        five hours debugging this issue until I found a stable, elegant, and
        permanent fix that restores clean sound on Ubuntu 22 through 25, and
        likely future versions as well.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">🔍 The Problem</h2>
      <p className="mb-4">
        The issue usually appears when Ubuntu uses <code>PipeWire</code> and{" "}
        <code>WirePlumber</code> (the modern replacements for PulseAudio). These
        manage sound through ALSA, but in some virtualized environments,
        especially VMware Workstation or Fusion, audio gets{" "}
        <strong>choppy, delayed, or breaks entirely</strong> after a few
        minutes.
      </p>

      <p className="mb-4">
        Running <code>pactl info</code> might show something like:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto text-sm text-text-light dark:text-text-dark">
        {`Server Name: PulseAudio (on PipeWire 1.4.7)`}
      </pre>
      <p className="mt-2">
        Despite reinstalling or restarting services, the issue often persists.
        Disabling or reinstalling <code>pulseaudio</code> and{" "}
        <code>pipewire</code> can even break GNOME utilities — which makes the
        fix trickier.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">🧠 Root Cause</h2>
      <p className="mb-4">
        The problem lies in how <code>ALSA</code> handles buffering inside
        virtualized sound cards. The default <code>period-size</code> and{" "}
        <code>headroom</code> are too small for some environments, causing
        underruns (buffer starvation), which lead to clipping and stuttering.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">⚙️ The Fix</h2>
      <p className="mb-4">
        The solution is to override ALSA’s buffer configuration through{" "}
        <code>WirePlumber</code>, by creating a simple configuration file that
        increases the period size and headroom.
      </p>

      <p className="mb-2 font-semibold">Run these commands in your terminal:</p>
      <pre className="bg-gray-900 text-green-200 p-4 rounded-md overflow-x-auto text-sm">
        {`mkdir -p ~/.config/wireplumber/wireplumber.conf.d/

nano ~/.config/wireplumber/wireplumber.conf.d/50-alsa-config.conf`}
      </pre>

      <p className="mt-4">
        Then add the following configuration inside the file:
      </p>
      <pre className="bg-gray-900 text-blue-200 p-4 rounded-md overflow-x-auto text-sm">
        {`monitor.alsa.rules = [
  {
    matches = [
      { node.name = "~alsa_output.*" }
    ]
    actions = {
      update-props = {
        api.alsa.period-size = 1024
        api.alsa.headroom = 8192
      }
    }
  }
]`}
      </pre>

      <p className="mt-4">
        Save and exit (<code>Ctrl + O</code>, <code>Enter</code>,{" "}
        <code>Ctrl + X</code>), then reload and restart services:
      </p>
      <pre className="bg-gray-900 text-green-200 p-4 rounded-md overflow-x-auto text-sm">
        {`systemctl --user daemon-reload
systemctl --user restart pipewire wireplumber pipewire-pulse`}
      </pre>

      <p className="mt-4">
        Once restarted, your audio should immediately stabilize — no more
        clipping or distortion.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        🚀 Bonus: One-Click Script
      </h2>
      <p className="mb-4">
        To make it super easy, I created a small Bash script that applies the
        fix automatically. You can save this anywhere (like{" "}
        <code>~/scripts/fix-audio-buffer.sh</code>), make it executable, and run
        it whenever needed.
      </p>

      <pre className="bg-gray-900 text-yellow-200 p-4 rounded-md overflow-x-auto text-sm">
        {`#!/bin/bash
set -euo pipefail

CONF_DIR="$HOME/.config/wireplumber/wireplumber.conf.d"
CONF_FILE="$CONF_DIR/50-alsa-config.conf"
BACKUP_DIR="$HOME/.config/wireplumber/backups"

mkdir -p "$CONF_DIR" "$BACKUP_DIR"

if [ -f "$CONF_FILE" ]; then
  ts=$(date +%F_%H%M%S)
  cp "$CONF_FILE" "$BACKUP_DIR/50-alsa-config.conf.bak.$ts"
  echo "Existing config backed up to $BACKUP_DIR/50-alsa-config.conf.bak.$ts"
fi

cat > "$CONF_FILE" <<'EOF'
monitor.alsa.rules = [
  {
    matches = [
      { node.name = "~alsa_output.*" }
    ]
    actions = {
      update-props = {
        api.alsa.period-size = 1024
        api.alsa.headroom = 8192
      }
    }
  }
]
EOF

echo "Wrote $CONF_FILE"
systemctl --user daemon-reload
systemctl --user restart pipewire wireplumber pipewire-pulse

echo "✅ Audio buffer fix applied successfully!"`}
      </pre>

      <p className="mt-4">Then run:</p>
      <pre className="bg-gray-900 text-green-200 p-4 rounded-md overflow-x-auto text-sm">
        {`chmod +x ~/scripts/fix-audio-buffer.sh
~/scripts/fix-audio-buffer.sh`}
      </pre>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        🔄 Is This Permanent?
      </h2>
      <p className="mb-4">
        Yes — once you’ve created the configuration file, it will persist across
        reboots and future Ubuntu releases. You’ll only need to reapply it if
        you reinstall or wipe your <code>~/.config/wireplumber/</code>{" "}
        directory.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">💬 Final Thoughts</h2>
      <p className="mb-4">
        This fix took me hours of deep troubleshooting — from verifying{" "}
        <code>PulseAudio</code> logs, restarting services, to isolating buffer
        underruns in <code>ALSA</code>. But the result is rock-solid:{" "}
        <strong>
          clear, uninterrupted sound on Ubuntu inside VMware or any virtualized
          environment
        </strong>
        .
      </p>

      <p className="mb-4 italic">
        If this helped you, feel free to share this post to help others who’ve
        been battling with broken audio on Ubuntu VMs. You might just save
        someone else five hours of frustration!
      </p>

      <div className="mt-8 p-4 border-t text-center text-sm text-gray-600 dark:text-gray-400">
        Written by <strong>Philip Kelechukwu Orji</strong> — Tech Engineer,
        Trainer & Open Source Contributor
      </div>
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-center mb-2">
          Follow me on 𝕏 for more tech insights
        </p>
        <a
          href="https://twitter.com/JoinPhotonPhill"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-blue-500/70 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          @JoinPhotonPhill
        </a>
      </div>
    </div>
  );
}
