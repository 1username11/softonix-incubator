<template>
  <div class="flex items-center justify-center h-full">
    <el-card class="p-5 w-[500px]">
      <template #header>
        <p class="font-semibold text-xl mb-2 border-none">Login</p>
      </template>

      <el-form
        ref="formRef"
        class="mt-4"
        label-position="top"
        :rules="formRules"
        :model="formModel"
        @submit.prevent="submit"
      >
        <el-form-item label="Email" prop="email">
          <el-input v-model="formModel.email" />
        </el-form-item>

        <el-form-item label="Password" prop="password">
          <el-input v-model="formModel.password" type="password" />
        </el-form-item>

        <el-button native-type="submit" :type="$elComponentType.primary">
          Login
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import type { FormRules } from 'element-plus'

const router = useRouter()
const { $routeNames } = useGlobalProperties()

const formRef = useElFormRef()

const formModel = useElFormModel({
  email: '',
  password: ''
})

const formRules: FormRules = useElFormRules({
  email: [useRequiredRule(), useEmailRule()],
  password: [useRequiredRule(), useMinLenRule(6)]
})

function submit () {
  formRef.value?.validate(isValid => {
    if (isValid) {
      router.push({ name: $routeNames.contacts })
    }
  })
}
</script>
