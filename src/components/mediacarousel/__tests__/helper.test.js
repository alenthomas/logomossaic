import {sanitizeText} from '../helpers'

describe('Carousal helper test suite', () => {
  let ordinaryText = 'website is '
  let textWithUrl = ordinaryText + 'https://www.google.co.in';
  let emojiUtf = '\u2764\uFE0F'

  test('Removes urls from text', () => {
    let output = sanitizeText(textWithUrl)
    expect(output).toBe(ordinaryText);
  })

  test('Removes emojis and replaces with html', () => {
    let output = sanitizeText(emojiUtf)
    expect(output).toMatchSnapshot()
  })

  test('Removes emojis and urls from text', () => {
    let output = sanitizeText(emojiUtf + textWithUrl)
    expect(output).toMatchSnapshot()
  })

})