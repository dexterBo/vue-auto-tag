<style lang="less" scoped>
tr:last-child td {
  padding-bottom: 0;
}
</style>
<template>
  <div>
    <a-form :form="form1" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item label="Note">
      <a-input
        v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
    <a-form-item label="Gender">
      <a-select
        v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">
          male
        </a-select-option>
        <a-select-option value="female">
          female
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
    <el-select v-model="value1" multiple placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-input-number
      v-model="num"
      @change="handleChange"
      :min="1"
      :max="10"
      label="描述文字"
    ></el-input-number>
    <a-button type="primary"> Primary </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed"> Dashed </a-button>
    <a-button type="danger"> Danger </a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary"> 按钮 </a-button>
    </a-config-provider>
    <a-button type="primary"> 按钮 </a-button>
    <a-button type="link"> Link </a-button>
    <a-button type="primary" loading> Loading </a-button>
    <div class="icons-list">
      <a-icon type="home" />
      <a-icon type="setting" theme="filled" />
      <a-icon type="smile" theme="outlined" />
      <a-icon type="sync" spin />
      <a-icon type="smile" :rotate="180" />
      <a-icon type="loading" />
    </div>
    <a-space>
      <div>1</div>
      <div>2</div>
    </a-space>
    <div>
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="Title"
        sub-title="This is a subtitle"
        @back="() => $router.go(-1)"
      >
        <template slot="extra">
          <a-button key="3"> Operation </a-button>
          <a-button key="2"> Operation </a-button>
          <a-button key="1" type="primary"> Primary </a-button>
        </template>
        <a-descriptions size="small" :column="3">
          <a-descriptions-item label="Created"> Lili Qu </a-descriptions-item>
          <a-descriptions-item label="Association">
            <a>421421</a>
          </a-descriptions-item>
          <a-descriptions-item label="Creation Time">
            2017-01-10111
          </a-descriptions-item>
          <a-descriptions-item label="test"> 2017-10-10 </a-descriptions-item>
          <a-descriptions-item label="Remarks">
            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
          </a-descriptions-item>
        </a-descriptions>
      </a-page-header>
      <br />
      <a-page-header
        title="Title"
        sub-title="This is a subtitle"
        @back="() => $router.go(-1)"
      >
        <template slot="tags">
          <a-tag color="blue"> Running </a-tag>
        </template>
        <template slot="extra">
          <a-button key="3"> Operation </a-button>
          <a-button key="2"> Operation </a-button>
          <a-button key="1" type="primary"> Primary </a-button>
        </template>
        <a-input-number
          :formatter="
            (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          "
          :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
          id="inputNumber"
          v-model="num"
          :min="1"
          :max="10"
        />
        <a-input v-model="num" />
        <a-row type="flex">
          <a-statistic title="Status" value="Pending" />
          <a-statistic
            title="Price"
            prefix="$"
            :value="568.08"
            :style="{
              margin: '0 32px',
            }"
          />
          <a-statistic title="Balance" prefix="$" :value="3345.08" />
        </a-row>
      </a-page-header>
    </div>
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="Activity name">
        <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item label="Activity zone">
        <a-select v-model="form.region" placeholder="please select your zone">
          <a-select-option value="shanghai"> Zone one </a-select-option>
          <a-select-option value="beijing"> Zone two </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="Activity time">
        <a-date-picker
          v-model="form.date1"
          show-time
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </a-form-model-item>
      <a-form-model-item label="Instant delivery">
        <a-switch v-model="form.delivery" />
      </a-form-model-item>
      <a-form-model-item label="Activity type">
        <a-checkbox-group v-model="form.type">
          <a-checkbox value="1" name="type"> Online </a-checkbox>
          <a-checkbox value="2" name="type"> Promotion </a-checkbox>
          <a-checkbox value="3" name="type"> Offline </a-checkbox>
        </a-checkbox-group>
      </a-form-model-item>
      <a-form-model-item label="Resources">
        <a-radio-group v-model="form.resource">
          <a-radio value="1"> Sponsor </a-radio>
          <a-radio value="2"> Venue </a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="Activity form">
        <a-input v-model="form.desc" type="textarea" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit"> Create </a-button>
        <a-button style="margin-left: 10px"> Cancel </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      formLayout: 'horizontal',
      form1: this.$form.createForm(this, { name: 'coordinated' }),
      num: 1,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: [],
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    onSubmit() {
      console.log("submit!", this.form);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form1.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form1.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>
