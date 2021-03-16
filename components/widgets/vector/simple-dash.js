import { Component } from 'react'
import { object, string , boolean} from 'yup'
import Widget from '../../widget'
import Counter from '../../counter'

const schema = object().shape({
  title: string(),
  value: string(),
  loading: boolean(),
  error: object(),
})

export default class GenericDisplay extends Component {
  static defaultProps = {
    interval: 1000 * 60 * 5,
    title: 'GitHub Issue Count',
    value: '',
    loading: true,
    error: ''
  }

  render () {
    const { title, value, loading = false, error } = this.props
    return (
      <Widget title={title}>
        <Counter value={value} />
      </Widget>
    )
  }
}
