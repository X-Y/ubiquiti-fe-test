export async function getDevicesData() {
  const resp = await fetch("/api/getDevicesList");
  const data = await resp.json();
  return data;
}
