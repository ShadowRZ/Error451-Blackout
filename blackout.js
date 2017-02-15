// CSS样式
(function () {
  var CSSBlackout = document.createElement('style')
  var CSSBlackoutContent = document.createTextNode(
    '#blackout * { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;}' +
    '#blackout { background-color: #890604; background-image: url(bg.svg); background-position: center; background-repeat: no-repeat; background-size: cover; font-size: 16px; height: 100%; left: 0; margin: 0; overflow: hidden; position: fixed; text-align: left; top: 0; -webkit-transition: top 0.8s; transition: top 0.8s; width: 100%; z-index: 99999; }' +
    '#blackout.out { top: -150%; }' +
    '#blackout section { background: rgba(0, 0, 0, 0.2); border-radius: 1em; color: white; line-height: 1.5em; margin: 5% auto 3%; max-height: 70%; max-width: 750px; overflow-y: auto; padding: 3%; text-shadow: 1px 3px 3px black; width: 75%; }' +
    '#blackout p { color: white; line-height: 1.5em; text-shadow: 1px 3px 3px black; }' +
    '#blackout h1 { border-bottom: 1px solid #CCC; color: white; font-family: sans-serif; font-size: 1.5em; font-weight: bold; line-height: 1.5em; margin: 0 0 1em 0.25em; padding: 0 0 0.25em; }' +
    '#blackout a { color: #CCC; text-decoration: underline; } #blackout a:hover { background: transparent; color: #EEEEEE; text-decoration: underline; }' +
    '#blackout .anno { color: #BBB; font-size: 0.9em; margin-bottom: 1.5em; padding: 0 2em; text-shadow: 1px 1px 1px black;}' +
    '#blackout footer { display: block; height: 20%; text-align: center; } ' +
    '#blackout .blackout-btn { background-color: black; border-radius: 8px; box-shadow: 0 0 15px white; color: white; display: inline-block; line-height: 1.5em; padding: 0.5em 1em; text-decoration: none; }' +
    '#blackout .blackout-btn:hover { background-color: #333; color: white; text-decoration: none; }'
)
  CSSBlackout.appendChild(CSSBlackoutContent)

// 内容
  var header = document.createElement('header')
  var title = document.createElement('h1')
  title.appendChild(document.createTextNode('本网页基于国家法律而封锁'))
  header.appendChild(title)

  var section = document.createElement('section')
  section.appendChild(header)

  var content1 = document.createElement('p')
  content1.appendChild(document.createTextNode('为何看到这个界面？'))

  var content3 = document.createElement('p')
  content3.appendChild(document.createTextNode('你知道吗，政府正打算立法，取得逕自封锁境外侵权网站的权利。未来本站如果出现政府认定的侵权内容，经由政府机关对 ISP 下令，就可以封锁本站，让你再也连不上。'))
  var content31 = document.createElement('p')
  content31.appendChild(document.createTextNode('如果我们同意提供政府这种权利，以后他们还能以各种理由，任意阻挡他们觉得“不适当”的网站。未来许多网站可能被迫自我审查，在你发言的同时，先看看有沒有“敏感词”。'))

  var error451a = document.createElement('a')
  error451a.setAttribute('href', '451.PNG')
  error451a.setAttribute('target', '_blank')
  error451a.appendChild(document.createTextNode('ERROR 451 错误页面'))

  var content4 = document.createElement('p')
  content4.appendChild(document.createTextNode('我们不希望这种事情在任何地方发生，请您与我们一同反对政府将手伸进网络！如果你我不积极争取，有一天，你将会看到这个 '))
  content4.appendChild(error451a)
  content4.appendChild(document.createTextNode('，真正阻挡了你的浏览。'))

  section.appendChild(content1)
  section.appendChild(content3)
  section.appendChild(content31)
  section.appendChild(content4)

  var footer = document.createElement('footer')
  var footerButton = document.createElement('a')
  footerButton.setAttribute('href', 'javascript:void(0)')
  footerButton.setAttribute('class', 'blackout-btn')
  footerButton.setAttribute('onclick', "document.getElementById('blackout').className = document.getElementById('blackout').className+' out';")
  footerButton.appendChild(document.createTextNode('继续浏览网页'))
  footer.appendChild(footerButton)

// #blackout区块
  function showBlackout () {
    var element = document.createElement('div')
    element.id = 'blackout'
    element.appendChild(CSSBlackout)
    element.appendChild(section)
    element.appendChild(footer)
    document.body.appendChild(element)
  }

  if (window.addEventListener) {
    window.addEventListener('load', function () { showBlackout() }, false)
  } else if (window.attachEvent) {
    window.attachEvent('on' + 'load', function () { showBlackout() })
  }
})()
