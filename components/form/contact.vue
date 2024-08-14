<template>
<div>
    <transition name="fade">
    <div class="px-2 py-2 flex flex-row items-center" v-if="submitted">
        <h1 class="text-4xl">{{t('contactForm.success')}}</h1>
        <Icon name="ic:baseline-check-circle-outline" size="56" class="text-fourth ml-2"/>
    </div>
    </transition>
    <div v-if="!submitted" class="flex flex-col items-center p-2 w-fit rounded-3xl bg-secondary">
          <div class="flex flex-col items-center">
            <h1 class="text-4xl font-semibold">{{t('contactForm.title')}}</h1>
            <form class="p-2 flex flex-col items-center w-full h-fit">
            <h2 class="text-center text-white">{{t('contactForm.subtitle.first')}} dainiuss258@gmail.com {{t('contactForm.subtitle.second')}}</h2>
            <p class="w-full text-red-500">{{errors.name}}</p>
            <input 
            class=" bg-sky-950 focus:ring-2 focus:ring-fourth focus:outline-none m-2 p-2 rounded-lg w-full h-1/4" 
            type="text" 
            :placeholder="t('contactForm.name')" 
            id="name"
            v-model="name"
            v-bind="nameAttrs"
            />
            <p class="w-full text-red-500">{{errors.email}}</p>
            <input 
            class=" bg-sky-950 focus:ring-2 focus:ring-fourth focus:outline-none m-2 p-2 rounded-lg w-full h-1/4" 
            type="email" 
            id="email"
            :placeholder="t('contactForm.email')" 
            v-model="email"
            v-bind="emailAttrs"
            />
            <p class="w-full text-red-500">{{errors.message}}</p>
            <textarea 
            class="bg-sky-950 resize-none focus:ring-2 focus:ring-fourth focus:outline-none m-2 p-2 rounded-lg w-full h-48" 
            :placeholder="t('contactForm.message')"
            id="message"
            v-model="message"
            v-bind="messageAttrs"
            ></textarea>
            <div class="flex flex-row justify-start w-full">
                <button @click="onSubmit" type="button" class="bg-tertiary px-4 py-1 text-white rounded-2xl text-xl transition-colors duration-300 hover:bg-fourth">{{t("contactForm.send")}}</button>
            </div>
            </form>
          </div>
    </div>
</div>
</template>

<script setup> 
import { useI18n } from 'vue-i18n'
import emailjs from "@emailjs/browser";
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const submitted = ref(false);
const { t } = useI18n()
const config = useRuntimeConfig();

const { handleSubmit, values, errors, defineField } = useForm({
  validationSchema: yup.object({
    name:
    yup.string()
    .required(t('contactForm.required.name')),
    email: 
    yup.string()
    .email(t('contactForm.required.emailValid'))
    .required(t('contactForm.required.email')),
    message: 
    yup.string()
    .required(t('contactForm.required.message'))
    .min(10, t('contactForm.required.messageLength')),
  }),
});

const [email, emailAttrs] = defineField('email', {
    validateOnModelUpdate: false,
});
const [name, nameAttrs] = defineField('name', {
    validateOnModelUpdate: false,
});
const [message, messageAttrs] = defineField('message', {
    validateOnModelUpdate: false,
});


const onSubmit = handleSubmit(async () => {
  try {
    const serviceId = config.public.emailJsServiceId;
    const contactMeTemplateId = config.public.emailJsContactMeTemplateId;
    const templateParams = {
      ...values,
    };
    
    const response = await emailjs.send(
      serviceId,
      contactMeTemplateId,
      templateParams,
      config.public.emailjsPublicKey
    );

    if (response.status === 200) {
      submitted.value = true;
    } else {
      alert(t('contactForm.error'));
      throw new Error("Email sending failed");
    }
  } catch (error) {
    console.error(error);
  }
});

onMounted(() => {
  emailjs.init(config.public.emailJsPublicKey);
});

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>