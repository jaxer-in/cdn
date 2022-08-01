const version = "v220723";
const rawUrl = null;
const githubPrefix = "https://jaxer-in.github.io/cdn";
const cloudflarePrefix = "https://cloud-flair.com";
const jsDeliveryPrefix = "https://cdn.jsdelivr.net/gh/jaxer-in/cdn@";
var resource = "";

function onLoad() {
  document.getElementById("idPVersion").innerHTML = version;
}
onLoad();

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
  var codeRawUrl = document.getElementById("idCodeRawUrl");
  var codeEmbeddedUrl = document.getElementById("idCodeEmbeddedUrl");

  var endpoint = "";

  const cdnProvider = getCdnProvider();
  console.log(`cdnProvider: ${cdnProvider}`);

  if (cdnProvider === "github") {
    endpoint = `${githubPrefix}${resource}`;
  } else if (cdnProvider === "cloudflare") {
    endpoint = `${cloudflarePrefix}`;
  } else if (cdnProvider === "jsdelivr") {
    endpoint = `${jsDeliveryPrefix}${version}${resource}`;
  }

  if (resource.endsWith(".css")) {
    codeRawUrl.innerHTML = `${endpoint}`;
    codeEmbeddedUrl.innerHTML = `&lt;link rel="stylesheet" href="${endpoint}" /&gt;`;
  } else if (resource.endsWith(".js")) {
    codeRawUrl.innerHTML = `${endpoint}`;
    codeEmbeddedUrl.innerHTML = `&lt;script src="${endpoint}"></script&gt;`;
  }
}

function onResourceClick(THIS) {
  resource = `${depth}/${THIS.innerHTML.trim()}`;
  console.log(`resource: ${resource}`);
  var githubPrefix = "https://jaxer-in.github.io/cdn/";
  var cloudflarePrefix = "https://jaxer-in.github.io/cdn/";
  var jsDeliveryPrefix = "https://cdn.jsdelivr.net/";
  var resourceModel = new bootstrap.Modal(document.getElementById("resourceModal"), { keyboard: true });
  resourceModel.show();
  onChangeCdnProvide();
}

const copyToClipboard = (elementId) => {
  var copyText = document.getElementById(elementId).value;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("Copied to clipboard");
  });
};

const onClickCopyRawUrl = () => {
  copyToClipboard("idCodeRawUrl");
};
const onClickCopyEmbeddedUrl = () => {
  copyToClipboard("idCodeEmbeddedUrl");
};
const onClickCopyDownloadFile = () => {
  console.log("onClickCopyDownloadFile");
};
