const result = await Bun.build({
        entrypoints: ["./src/build.tsx"],
        outdir: "./static/js",
    });

    if (!result.success) {
        console.error("Build failed");
        for (const message of result.logs) {
        // Bun will pretty print the message object
        console.error(message);
    }
}