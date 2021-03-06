import './slider'
import modals from './modules/modal'
import tabs from './modules/tabs'
import forms from './modules/forms'
import changeModalState from './modules/modalState'
import timer from './modules/timer'
import bigImage from './modules/images'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    let modalState = {}
    let deadLine = '2020-08-01'

    changeModalState(modalState)

    // modals()
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline')
    forms(modalState)
    modals(modalState)

    timer('.container1', deadLine)
    bigImage('.works')
})