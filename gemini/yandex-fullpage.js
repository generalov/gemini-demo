gemini.suite("yandex-fullpage", suite => {
  suite
    .setUrl("/")
    .setCaptureElements("body")
    .capture("plain");
});
