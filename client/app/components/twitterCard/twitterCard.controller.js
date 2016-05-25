import moment from 'moment';

function TwitterCardController($sce) {

  var vm = this;
  vm.name = 'twitterCard';
  vm.getTweetContent = getTweetContent;
  vm.getRelativeTweetTime = getRelativeTweetTime;

  function getRelativeTweetTime() {
    return moment(new Date(vm.tweetTime)).fromNow();
  }

  function getTweetContent() {
    return $sce.trustAsHtml(createHyperLinks(vm.content));
  }

  function createHyperLinks(content) {
    var hyperLinkedHtmlText;
    var urlPattern = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-](?!\u2026))/g;
    var userTagPattern = /\@(\w){1,15}/g;
    hyperLinkedHtmlText = content.replace(urlPattern, '<a href="$&" target="_blank">$&</a>');
    hyperLinkedHtmlText = hyperLinkedHtmlText.replace(userTagPattern, '<a href="http://www.twitter.com/$&" target="_blank">$&</a>');
    return hyperLinkedHtmlText;
  }

}

export default TwitterCardController;
