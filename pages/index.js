import Dashboard from '../components/dashboard'

// Widgets
import DateTime from '../components/widgets/datetime'
import useSWR from 'swr'
import GenericDisplay from "../components/widgets/vector/simple-dash"

// Theme
import darkTheme from '../styles/dark-theme'
// import darkTheme from '../styles/dark-theme'
const fetcher = url => fetch(url).then(r => r.json())
export default function Index() {
  const {data, error} = useSWR("/api/metrics", fetcher, {
    refreshInterval: 15000,
    revalidateOnReconnect: true,
  });

  if(error || ! data) {
    return <Dashboard theme={darkTheme}>
        <DateTime />
      </Dashboard>
  }

  const uptime = Math.round(new Date().getTime()/1000 - data['router_process_start_time_seconds'].value)

  return <Dashboard theme={darkTheme}>
    <DateTime />
    <GenericDisplay title="User CPU" value={data['router_process_cpu_user_seconds_total'].value.toFixed(2)}></GenericDisplay>
    <GenericDisplay title="System CPU" value={data['router_process_cpu_system_seconds_total'].value.toFixed(2)}></GenericDisplay>
    <GenericDisplay title="Total CPU" value={data['router_process_cpu_seconds_total'].value.toFixed(2)}></GenericDisplay>
    <GenericDisplay title="Uptime" value={uptime + "s"}></GenericDisplay>

    <GenericDisplay title="Resident Memory" value={Math.round(data['router_process_resident_memory_bytes'].value/1024/1024) + " MB"}>MB</GenericDisplay>
    <GenericDisplay title="Liquidity Rinkeby 0x00" value={data['router_process_cpu_system_seconds_total'].value.toFixed(2)}></GenericDisplay>

  </Dashboard>
}
