import { defineStore } from 'pinia'

export const useStore =
    defineStore('store', () => {
      const categories = [
        {
          url: 'src/assets/staticResource/categories/Rectangle 4406.png',
          name: 'Beach'
        },
        {
          url: 'src/assets/staticResource/categories/Rectangle 4407.png',
          name: 'Beach'
        },
        {
          url: 'src/assets/staticResource/categories/Rectangle 4408.png',
          name: 'Beach'
        },
        {
          url: 'src/assets/staticResource/categories/Rectangle 4409.png',
          name: 'Beach'
        },
        {
          url: 'src/assets/staticResource/categories/Rectangle 4410.png',
          name: 'Beach'
        },
        {
          url: 'src/assets/staticResource/categories/Rectangle 4411.png',
          name: 'Beach'
        }
      ]

      return {
        categories
      }
    })
