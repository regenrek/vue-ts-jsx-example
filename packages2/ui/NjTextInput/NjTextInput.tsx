// import { useValidation } from 'vue-composable'
import { ref, computed, watch } from 'vue-demi'
import * as vca from 'vue-tsx-support/lib/vca'
import { modifiers as m } from 'vue-tsx-support'
import { css } from 'emotion'

// import { useId } from '@nujek/ui'
const styles = {
  label: css`
    cursor: pointer
  `
}

const NjTextInput = vca.component({
  name: 'NjTextInput',
  props: {
    id: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    rules: {
      type: [String, Object],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    vid: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator(value: any) {
        return [
          'url',
          'text',
          'password',
          'tel',
          'search',
          'number',
          'email'
        ].includes(value)
      }
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    const innerValue = props.value ? ref(props.value) : ref(null)
    // const input = computed(() => ctx.refs.input)
    // const input = ref(null as HTMLFormElement | null)
    const input = computed(() => ctx.refs.input as HTMLFormElement)

    // onMounted(() => {
    //   // the DOM element will be assigned to the ref after initial render
    //   console.log('FUCK', input.value) // <div/>
    // })

    const hasValue = computed(() => {
      return !!innerValue.value
    })

    const value = computed(() => {
      return props.value
    })

    // watch(innerValue, (value, preValue) => {
    //   emit('input', value)
    // })

    watch(value, (value, preValue) => {
      if (value !== preValue) {
        console.debug('set new value ', value)
        innerValue.value = value
      }
    })

    return () => {
      const focusInput = () => input.value.focus()

      return (
        <div>
          <label class={styles.label} onClick={focusInput}>{props.label}</label>
          <input
            id={props.id}
            ref="input"
            v-model={innerValue}
            type={props.type}
            disabled={props.disabled}
            placeholder={props.placeholder}
          />
        </div>
      )
    }

    // return () => {
    //   return (
    //     <div ref="test">
    //       <label
    //         class="block text-gray-700 text-sm font-bold mb-2 cursor-pointer"
    //         for={id}
    //         onClick={input.querySelector('input').focus()}
    //       >
    //         <span>{ label || name }</span>
    //         <span>{ required ? ' *' : '' }</span>
    //       </label>

    //       <input
    //         id={id}
    //         ref={input}
    //         v-model={innerValue}
    //         class={[{ shadow: !errors[0], 'shadow-red border-red-200': errors[0], 'has-value': hasValue }, 'shadow-blue appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline']}
    //         type={type}
    //         disabled={disabled}
    //         placeholder={placeholder}
    //         v-bind="ariaInput"
    //       />

    //       <span
    //         v-if="errors[0]"
    //         class="block text-red-600 text-sm mt-1"
    //         v-bind="ariaMsg"
    //       >{ errors[0] }</span>
    //     </div>
    //   )
    // }
  }
  //   render(this: any) {
  //     const {
  //       input,
  //       id,
  //       label,
  //       name,
  //       errors,
  //       required,
  //       hasValue,
  //       innerValue,
  //       disabled,
  //       placeholder,
  //       type
  //     } = this
  //     // context.refs.el.querySelector('input').focus();
  //     // this.$refs.input.focus()
  //     console.log(this)
  //     console.log(input)

  //     return (
  //       <div ref="test">
  //         <label
  //           class="block text-gray-700 text-sm font-bold mb-2 cursor-pointer"
  //           for={id}
  //           onClick={input.querySelector('input').focus()}
  //         >
  //           <span>{ label || name }</span>
  //           <span>{ required ? ' *' : '' }</span>
  //         </label>

  //         <input
  //           id={id}
  //           ref={input}
  //           v-model={innerValue}
  //           class={[{ shadow: !errors[0], 'shadow-red border-red-200': errors[0], 'has-value': hasValue }, 'shadow-blue appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline']}
  //           type={type}
  //           disabled={disabled}
  //           placeholder={placeholder}
  //           v-bind="ariaInput"
  //         />

//         <span
//           v-if="errors[0]"
//           class="block text-red-600 text-sm mt-1"
//           v-bind="ariaMsg"
//         >{ errors[0] }</span>
//       </div>
//     )
//   }
})

export default NjTextInput
