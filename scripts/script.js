/*hexo.extend.generator.register('single-page', function(locals) {
  var config = this.config;
  var singlePageConfig = config.single_page;
  var results = [];

  singlePageConfig.forEach(function(v,k) {
    results = results.concat({
      path: v  + "/index.html",
      layout: ['page']
    });
  });
  return results;
});*/

hexo.extend.filter.register('after_post_render', function(data){
  // console.log('---' + data.title + '---');
  // if (!data.title) {
  //   console.log(data)
  // }
  try {
    // data.content.match(/<img([^>]*)\ssrc=/gi).forEach(x => console.log('+++' + x))
    if (hexo.theme.config.lazyload) {
      data.content = data.content.replace(/<img([^>]*)\ssrc=/gi, '<img$1 class="lazyload"  data-src=')
    }
    // data.content.match(/<img([^>]*)\sdata-src=/gi).forEach(x => console.log('+++' + x))
    return data
  } catch (e) {
    return data
  }
});