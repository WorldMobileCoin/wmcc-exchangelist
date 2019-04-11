const css = [
  '<style type="text/css">',
  '#exchange-list {padding:10px;width:calc(100% - 20px);}',
  '#exchange-list *{color:#333;font-family:UbuntuM,sans-serif;font-weight:normal;}',
  '#exchange-list h1{font-size:26px;margin:25px 0 20px;font-weight:normal;}',
  '#exchange-list table{width:100%;}',
  '#exchange-list table tr *{font-size:14px;}',
  '#exchange-list table tr:nth-child(odd){background-color: #f9f9f9;}',
  '#exchange-list table th, #exchange-list table td{border-top:1px solid #eee;text-align:center;}',
  '#exchange-list table th{font-size:15px;padding:10px 5px;}',
  '#exchange-list table td, #exchange-list table td a{line-height:40px;font-family:Ubuntu,Tahoma;}',
  '#exchange-list table td i:before{padding:5px;margin:0 5px;font-size:16px;cursor:pointer}',
  '#exchange-list > div.unavailable{width:100%;text-align:center;position:absolute;top:50%;}',
  '#exchange-list .unavailable h2{line-height:30px;font-size:24px;color:#389;}',
  '#exchange-list .unavailable span{color:#555;font-size:14px;line-height:30px;}',
  '</style>'
].join('')

const content = list => {
  const table = [
    '<table>',
    '<tr><th>Name</th><th>Link</th></tr>',
    '</table>'
  ]

  list.forEach(exchange => {
    const {name, link} = exchange
    const row = [
      '<tr>',
      `<td>${name}</td>`,
      `<td><a>${link}</a><i class="glyph-icon flaticon-copy" value="${link}" title="Copy link"></i></td>`,
      '</tr>'
    ].join('')
    table.splice(-1, 0, row)
  })

  return [
    '<div id="exchange-list"><div>',
    '<h1>Exchange List</h1>',
    table.join(''),
    '</div></div>'
  ].join('')
}

const empty = [
  '<div id="exchange-list"><div class="unavailable">',
  '<h2>Exchange Not Available</h2>',
  '<span>Exchange list will be update soon</span>',
  '</div></div>'
].join('')

return list => {
  if (!list.length)
    return empty+css

  return content(list)+css
}