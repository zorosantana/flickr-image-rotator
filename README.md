# images-viewer-vue

![Alt text](https://i.screenshot.net/qyxyphg "screenshot")

Demo: https://xv1wkr9zzz.codesandbox.io/

## Project setup
```
npm install images-viewer-vue
```

## Config Options

| Props       | Mandatory | Type    | Default |
|-------------|-----------|---------|---------|
| autoplay    | no        | Boolean | true    |
| images      | yes       | Array   | -       |
| showButtons | no        | Boolean | true    |

## Example of Usage

```
<template>
  <ImagesViewerVue :images="images" />
</template>

<script>
import ImagesViewerVue from "images-viewer-vue";

export default {
  name: "App",
  components: {
    ImagesViewerVue
  },
  data() {
    return {
      images: [
        {
          caption: "Caption 1",
          url: "https://loremflickr.com/320/240/cars?random=1"
        },
        {
          caption: "Caption 2",
          url: "https://loremflickr.com/320/240/cars?random=2"
        },
        {
          caption: "Caption 3",
          url: "https://loremflickr.com/320/240/cars?random=3"
        },
        {
          caption: "Caption 4",
          url: "https://loremflickr.com/320/240/cars?random=4"
        },
        {
          caption: "Caption 5",
          url: "https://loremflickr.com/320/240/cars?random=5"
        }
      ]
    };
  }
};
</script>
```