gemini.suite("yandex-logo", suite => {
  suite
    .setUrl("/")
    .setCaptureElements(".home-logo")
    .capture("plain");
});
