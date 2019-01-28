<template>
  <div
    class="d-col"
    :class="classes"
    :style="styles"
  >
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'd-col'

export default {
  name: 'DinoCol',
  props: {
    span: [Number, String],
    offset: [Number, String],
    order: [Number, String],
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    classes() {
      let { span, offset, order, xs, sm, md, lg } = this
      return [
        ...this.createClasses({ span, offset, order }),
        ...this.createClasses(xs, 'xs-'),
        ...this.createClasses(sm, 'sm-'),
        ...this.createClasses(md, 'md-'),
        ...this.createClasses(lg, 'lg-')
      ]
    },
    styles() {
      let style = {}
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`
        style.paddingRight = `${this.gutter / 2}px`
      }
      return style
    }
  },
  methods: {
    createClasses(obj, str = '') {
      let classes = []
      if (typeof obj === 'number') {
        obj = { span: obj }
      }
      if (obj && obj.span) {
        classes.push(`${prefixCls}-${str}span-${obj.span}`)
      }
      if (obj && obj.offset) {
        classes.push(`${prefixCls}-${str}offset-${obj.offset}`)
      }
      if (obj && obj.order) {
        classes.push(`${prefixCls}-${str}order-${obj.order}`)
      }
      return classes
    }
  }
}
</script>

<style lang='scss' scoped>
.d-col {
  @for $n from 1 through 24 {
    &.d-col-span-#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.d-col-offset-#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.d-col-order-#{$n} {
      order: $n;
    }
  }
  // xs: <768px
  @media (max-width: 768px){
    @for $n from 1 through 24 {
      &.d-col-xs-span-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.d-col-xs-offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.d-col-xs-order-#{$n} {
        order: $n;
      }
    }
  }
  // sm: ≥768px
  @media (min-width: 768px){
    @for $n from 1 through 24 {
      &.d-col-sm-span-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.d-col-sm-offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.d-col-sm-order-#{$n} {
        order: $n;
      }
    }
  }
  // md: ≥992px
  @media (min-width: 992px){
    @for $n from 1 through 24 {
      &.d-col-md-span-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.d-col-md-offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.d-col-md-order-#{$n} {
        order: $n;
      }
    }
  }
  // lg: ≥1200px
  @media (min-width: 1200px){
    @for $n from 1 through 24 {
      &.d-col-lg-span-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.d-col-lg-offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.d-col-lg-order-#{$n} {
        order: $n;
      }
    }
  }
}
</style>
