// import indexComponent from '../containers/index/index'

// const routeConfig = [{
//     path: '/',
//     //component: indexComponent,
//     onEnter: function(nextState, replaceState) {
//         //console.log('onEnter', nextState)
//         let pathName = nextState.location.pathname.replace(/^\//,'')
//         if (pathName == '') {
//             replaceState(`index`)
//         }
//     },
//     childRoutes: [
//     //    {
//     //        path: 'login/:type(/:url)',
//     //        getComponents(location, callback) {
//     //            require.ensure([], function(require) {
//     //                callback(null, require('../containers/login/login.component').default)
//     //            })
//     //        }
//     //    },
//         {
//             path: 'index',
//             getComponents(location, callback) {
//                 require.ensure([], function(require) {
//                     callback(null, require('../containers/index/index').default)
//                 })
//             }
//         }
//     ]
// }]

const routeConfig = [
	{
		path: '/',
		getComponents(nextState, callback) {
			require.ensure([], (require) => {
				callback(null, require('../containers/index/index').default)
			})
		}
	}
	// {
	// 	path: '/another',
	// 	getComponents(location, callback) {
	// 		require.ensure([], (require) => {
	// 			callback(null, require('./components/Another'))
	// 		}, 'Another')
	// 	}
	// }
]

export default routeConfig