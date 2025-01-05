import {defineConfig} from "cypress";
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import addCucumberPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
            // Add the Cucumber preprocessor plugin
            await addCucumberPreprocessorPlugin(on, config);

            // Configure bundler for task_management.feature files
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [addCucumberPlugin(config)],
                })
            );

            // Return the updated config object
            return config;
        },
        specPattern: "cypress/e2e/**/*.feature", // Adjust to the location of your task_management.feature files
        baseUrl: "http://localhost:3000",        // Replace with your app's base URL
        supportFile: false,
    },
});
