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

export default class ButtonDisplay extends Component {
  static defaultProps = {
    interval: 1000 * 60 * 5,
    title: 'GitHub Issue Count',
    value: '',
    url: '',
    loading: true,
  }
  state = {
    error: false,
    loading: false,
  }
  onClick(){
    this.setState({
      loading: true,
    })
    fetch(this.props.url)
    .then(res => {
      this.setState({loading: false, error: false})
    })
    .catch(err => {
      console.error(err);
      this.setState({error: true})
    })
  }

  render () {
    const { title, value, } = this.props
    const {error, loading} = this.state
    return (
      <Widget title={title} loading={loading} error={error}>
        <button style={{fontSize: '1em'}} onClick={() => this.onClick()}>{value}</button>
      </Widget>
    )
  }
}
