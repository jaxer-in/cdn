const rawUrl = null;
const githubPrefix = "https://jaxer-in.github.io/cdn/";
const cloudflarePrefix = "https://cloud-flair.com/";
const jsDeliveryPrefix = "https://cdn.jsdelivr.net/";

function getCdnProvider() {
  var cdnProviders = document.getElementsByName("cdnProvider");

  var cdnProvider = null;

  for (var i = 0; i < cdnProviders.length; i++) {
    if (cdnProviders[i].checked) {
      cdnProvider = cdnProviders[i].value;
    }
  }

  return cdnProvider;
}

function onChangeCdnProvide() {
  console.log(`cdnProvider: ${getCdnProvider()}`);

  var codeRawUrl = document.getElementById("idCodeRawUrl");
  var codeEmbeddedUrl = document.getElementById("idCodeEmbeddedUrl");

  const cdnProvider = getCdnProvider();
  if (cdnProvider === "github") {
    codeRawUrl.innerHTML = githubPrefix;
    codeEmbeddedUrl.innerHTML = githubPrefix;
    return;
  }

  if (cdnProvider === "cloudflare") {
    codeRawUrl.innerHTML = cloudflarePrefix;
    codeEmbeddedUrl.innerHTML = cloudflarePrefix;
    return;
  }

  if (cdnProvider === "jsdelivery") {
    codeRawUrl.innerHTML = jsDeliveryPrefix;
    codeEmbeddedUrl.innerHTML = jsDeliveryPrefix;
    return;
  }
}

function onResourceClick(resourceId) {
  var githubPrefix = "https://jaxer-in.github.io/cdn/";
  var cloudflarePrefix = "https://jaxer-in.github.io/cdn/";
  var jsDeliveryPrefix = "https://cdn.jsdelivr.net/";
  var resourceModel = new bootstrap.Modal(document.getElementById("resourceModal"), { keyboard: false });
  resourceModel.show();
  onChangeCdnProvide();
}

const onClickCopyRawUrl = () => {
  console.log("onClickCopyRawUrl");
};
const onClickCopyEmbeddedUrl = () => {
  console.log("onClickCopyEmbeddedUrl");
};
const onClickCopyDownloadFile = () => {
  console.log("onClickCopyDownloadFile");
};
