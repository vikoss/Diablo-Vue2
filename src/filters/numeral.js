import numeral from 'numeral'

export default number => number ? numeral(Number(number)).format() : 0