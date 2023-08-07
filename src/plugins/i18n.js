import { provide } from "vue"

export const i18n = {
    install: (app, options) => {
      app.config.globalProperties.$i18n = (key) => {
        return key.split('.').reduce((o, i) => {
          if (o) return o[i]
        }, options)
      }
      provide('i18n', options)
    }
  }