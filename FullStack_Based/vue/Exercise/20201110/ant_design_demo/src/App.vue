<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout>
        <a-layout-header>
          <a-row type="flex" justify="start">
            <a-col :span="4">
              col-4
            </a-col>
            <a-col :span="4">
              col-4
            </a-col>
            <a-col :span="4">
              col-4
            </a-col>
            <a-col :span="4">
              col-4
            </a-col>
            <a-col :span="4">
              col-4
            </a-col>
            <a-col :span="4">
              <StepForwardOutlined /> col-4
            </a-col>
          </a-row>
        </a-layout-header>
        <a-layout-content>Content</a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { StepForwardOutlined } from "@ant-design/icons-vue";

export default {
  name: "App",
  components: {
    StepForwardOutlined
  }
};
</script>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>
