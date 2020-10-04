import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '../pages/Main/index'
import UserPage from '../pages/UserPage/index'

const Routes = createAppContainer(
    createSwitchNavigator({
        Main,
        UserPage
    })
)

export { Routes }
