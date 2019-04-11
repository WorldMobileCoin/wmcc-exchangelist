const css = [
  '<style type="text/css">',
  '#exchange-list > div{width:100%;text-align:center;position:absolute;top:50%;}',
  '#exchange-list h1{font-size:20px;color:#389;}',
  '#exchange-list span{color:#555;font-size:13px;line-height:30px;}',
  '</style>'
].join('')

const content = list => {
  const table = [
    '<table>',
    '</table>'
  ]

  list.forEach(exchange) {
    const {name, link} = exchange
    const row = [
      '<tr>',
      `<td>${name}</td>`,
      `<td><a>${link}</a><i class="glyph-icon flaticon-copy" value="${link}" title="Copy to clipboard"></i></td>`,
      '</tr>'
    ].join('')
    table.splice(-1, 0, row)
  }
  return [
    '<div id="exchange-list"><div>',
    '<h1>Exchange List</h1>',
    table.join(''),
    '</div></div>'
  ].join('')
}

const empty = [
  '<div id="exchange-list"><div>',
  '<h1>No Exchange Available</h1>',
  '<span>Exchange will update soon</span>',
  '</div></div>'
].join('')

return list => {
  if (!list.length)
    return empty+css

  return content(list)+css
}
