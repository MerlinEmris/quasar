import { BexBridge } from '#q-app/bex/private/bex-bridge'

const bridge = window.QBexBridge = new BexBridge({ type: 'app' })

export const bex = {
  bridge,
  promise: bridge.connectToBackground().catch(() => {})
}
