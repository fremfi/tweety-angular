import moment from 'moment';

function TwitterCardController($sce) {

  const vm = this;
  vm.name = 'twitterCard';
  vm.getTweetContent = getTweetContent;
  vm.getRelativeTweetTime = getRelativeTweetTime;

  function getRelativeTweetTime() {
    return moment(new Date(vm.tweetTime)).fromNow();
  }

  function getTweetContent() {
    return createHyperLinks(vm.content);
  }

  function createHyperLinks(content) {
    return hyperLinkUserNames(hyperLinkUrls(content));

    function hyperLinkUserNames(content) {
      let userTagPattern = /\@(\w){1,15}/g;
      return content.replace(userTagPattern, '<a href="http://www.twitter.com/$&" target="_blank">$&</a>');
    }

    function hyperLinkUrls(content) {
      let urlPattern = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-](?!\u2026))/g;
      return content.replace(urlPattern, '<a href="$&" target="_blank">$&</a>');
    }
  }

}

export default TwitterCardController;
