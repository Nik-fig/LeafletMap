import routeWatcher from './routeWaypoints'

export default function* () {
    yield routeWatcher();
}