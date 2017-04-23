const chai = require('chai')
const assert = chai.assert
const main = require('../src/main')

// Listen for console.log statements
require('mocha-sinon')
function stubFn () { this.sinon.stub(console, 'log') }

describe('main', () => {

  beforeEach(stubFn)

  it('question0 is a function that logs and doesn\'t return', () => {
    main.question0()

    console.log(console.log.calledWith('Hello JavaScript'));
    assert.isTrue(console.log.calledWith('Hello JavaScript'))
  })

  it('question1 is a function that returns and doesn\'t log', () => {
    const actual = main.question1()
    const expected = 'Hello JavaScript'

    assert.equal(actual, expected)
  })

  it('question2 is a function that with one parameter', () => {
    main.question2('my value')
    main.question2(10)

    assert.equal(console.log.callCount, 2)
    assert.isTrue(console.log.calledWith('Inputted value: my value'))
    assert.isTrue(console.log.calledWith('Inputted value: 10'))
  })

  it('question3 is a function that with two parameters', () => {
    const actual1 = main.question3(10, 21)
    const expected1 = 31
    assert.equal(actual1, expected1)

    const actual2 = main.question3('Hello', 'JavaScript')
    const expected2 = 'HelloJavaScript'
    assert.equal(actual2, expected2)
  })

  it('question4 is a function that calls another function', () => {
    const stringified = main.question4.toString()
    const reg = /question2/
    assert.isOk(stringified.match(reg))

    main.question4()
    const expectedStr = 'Inputted value: functions in functions'
    const expected = console.log.calledWith(expectedStr)
    assert.isTrue(expected)
  })

  it('question5 is a short function composed of other short functions', () => {
    const stringified = main.question5.toString()
    const daysAsParameterReg = /\(days,/
    const switchReg = /switch/
    const forReg = /for/

    assert.isOk(stringified.match(daysAsParameterReg))
    assert.isNotOk(stringified.match(switchReg))
    assert.isOk(stringified.match(forReg))

    const days = ['Mon', 'Sat']
    main.question5(days, 'go hiking')

    assert.equal(console.log.callCount, 2)
    assert.isTrue(console.log.calledWith(`Hooray! I can\'t wait to go hiking`))
    assert.isTrue(console.log.calledWith(`Better get back to work!`))
  })
})
