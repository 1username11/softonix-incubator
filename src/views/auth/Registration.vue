<template>
  <div class="max-w-[500px] m-auto">
    <el-card v-loading="loading">
      <template #header>
        <p class="font-semibold text-xl">Sign Up</p>
      </template>

      <el-form
        ref="formRef"
        label-position="top"
        :rules="formRules"
        :model="formModel"
        @submit.prevent="submit"
      >
        <el-form-item label="Email" prop="email">
          <el-input v-model="formModel.email" type="email" />
        </el-form-item>

        <el-form-item label="Password" prop="password">
          <el-input v-model="formModel.password" type="password" />
        </el-form-item>
        <el-form-item label="Confirm password" prop="confirmPassword">
          <el-input v-model="formModel.confirmPassword" type="password" />
        </el-form-item>

        <el-button native-type="submit" :type="$elComponentType.primary">
          Sign Up
        </el-button>
        <el-button
          :type="$elComponentType.primary"
          @click="router.push({ name: $routeNames.login })"
        >
          Login
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()
const { registration } = useAuthStore()

const formRef = useElFormRef()

const formModel = useElFormModel({
  email: '',
  password: '',
  confirmPassword: ''
})
const loading = ref(false)

const formRules = useElFormRules({
  email: [useRequiredRule(), useEmailRule()],
  password: [useRequiredRule(), useMinLenRule(6)],
  confirmPassword: [useRequiredRule(), useMinLenRule(6)]
})

function submit () {
  const payload: ILoginRequest = {
    email: formModel.email,
    password: formModel.password
  }
  try {
    formRef.value?.validate(isValid => {
      if (isValid) {
        loading.value = true
        registration(payload)
          .then(() => {
            return router.push({ name: $routeNames.login })
          })
          .finally(() => (loading.value = false))
      }
    })
  } catch (e) {
    console.log(e)
  }
}
</script>
