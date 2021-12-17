<template>
  <div>
    <div>
      <a-transfer :data-source="mockData" :titles="['Source', 'Target']" :target-keys="targetKeys"
        :selected-keys="selectedKeys" :render="item => item.title" :disabled="disabled" @change="handleChange"
        @selectChange="handleSelectChange" @scroll="handleScroll" />
      <a-switch un-checked-children="enabled" checked-children="disabled" :checked="disabled" style="margin-top: 16px"
        @change="handleDisable" />
    </div>
    <a-table :row-selection="rowSelection" :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
    <div>
    <a-card title="Default size card" style="width: 300px">
      <a slot="extra" href="#">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <br />
    <a-card size="small" title="Small size card" style="width: 300px">
      <a slot="extra" href="#">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <a-timeline>
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
    <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
  </a-timeline>
  <div>
    <a-button type="primary" @click="showModal">
      Open Modal
    </a-button>
    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
  </div>
  </div>
</template>
<script>
  const columns = [{
      title: "Name",
      dataIndex: "name",
      scopedSlots: {
        customRender: "name"
      },
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  const data = [{
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",
    },
  ];
  const mockData = [];
  for (let i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      disabled: i % 3 < 1,
    });
  }

  const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

  export default {
    data() {
      return {
        data,
        columns,
        mockData,
        targetKeys: oriTargetKeys,
        selectedKeys: ['1', '4'],
        disabled: false,
        visible: false,
      };
    },
    methods: {
      showModal() {
      this.visible = true;
      },
      handleOk(e) {
        console.log(e);
        this.visible = false;
      },
      handleChange(nextTargetKeys, direction, moveKeys) {
        this.targetKeys = nextTargetKeys;
        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
      },
      handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
        this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
      },
      handleScroll(direction, e) {
        console.log('direction:', direction);
        console.log('target:', e.target);
      },
      handleDisable(disabled) {
        this.disabled = disabled;
      },
    },
    computed: {
      rowSelection() {
        return {
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(
              `selectedRowKeys: ${selectedRowKeys}`,
              "selectedRows: ",
              selectedRows
            );
          },
          getCheckboxProps: (record) => ({
            props: {
              disabled: record.name === "Disabled User", // Column configuration not to be checked
              name: record.name,
            },
          }),
        };
      },
    },
  };
</script>