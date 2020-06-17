<template>
  <div class="mouse">
    <svg class="mouse__icon" width="23" height="34" viewBox="0 0 23 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.05 0C8.11936 0 5.30875 1.16419 3.23647 3.23647C1.16419 5.30875 0 8.11936 0 11.05V22.95C0 25.8806 1.16419 28.6913 3.23647 30.7635C5.30875 32.8358 8.11936 34 11.05 34C13.9806 34 16.7913 32.8358 18.8635 30.7635C20.9358 28.6913 22.1 25.8806 22.1 22.95V11.05C22.1 9.59889 21.8142 8.162 21.2589 6.82135C20.7036 5.4807 19.8896 4.26256 18.8635 3.23647C17.8374 2.21038 16.6193 1.39645 15.2787 0.841131C13.938 0.285817 12.5011 0 11.05 0ZM19.975 22.95C19.975 25.3171 19.0347 27.5872 17.3609 29.2609C15.6872 30.9347 13.4171 31.875 11.05 31.875C8.68294 31.875 6.41283 30.9347 4.73907 29.2609C3.06531 27.5872 2.125 25.3171 2.125 22.95V11.05C2.125 8.68294 3.06531 6.41283 4.73907 4.73907C6.41283 3.06531 8.68294 2.125 11.05 2.125C13.4171 2.125 15.6872 3.06531 17.3609 4.73907C19.0347 6.41283 19.975 8.68294 19.975 11.05V22.95Z" fill="url(#paint0_linear)"/>
      <path d="M10.6523 7.03975C10.7577 6.93426 10.9008 6.875 11.05 6.875C11.1992 6.875 11.3423 6.93426 11.4478 7.03975C11.5532 7.14524 11.6125 7.28831 11.6125 7.4375V10.8375C11.6125 10.9867 11.5532 11.1298 11.4478 11.2352C11.3423 11.3407 11.1992 11.4 11.05 11.4C10.9008 11.4 10.7577 11.3407 10.6523 11.2352C10.5468 11.1298 10.4875 10.9867 10.4875 10.8375V7.4375C10.4875 7.28831 10.5468 7.14524 10.6523 7.03975Z" stroke="url(#paint1_linear)"/>
      <defs>
        <linearGradient 
        id="paint0_linear" 
        x1="32.9277" 
        y1="-20.2728" 
        x2="-60.4043" 
        y2="42.5791" 
        gradientUnits="userSpaceOnUse">
        <stop 
        stop-color="#FFCE1F"/>
        <stop 
        offset="0.333819" 
        stop-color="#FAF0CE"/>
        <stop 
        offset="0.569189" 
        stop-color="#FCA555"/>
        <stop 
        offset="1" 
        stop-color="white" 
        stop-opacity="0"/>
        </linearGradient>
        <linearGradient 
        id="paint1_linear" 
        x1="13.1536" 
        y1="3.08067" 
        x2="1.89696" 
        y2="7.56617" 
        gradientUnits="userSpaceOnUse">
        <stop 
        stop-color="#FFCE1F"/>
        <stop 
        offset="0.333819" 
        stop-color="#FAF0CE"/>
        <stop 
        offset="0.569189" 
        stop-color="#FCA555"/>
        <stop 
        offset="1" 
        stop-color="white" 
        stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>

  </div>
</template>

<script>
export default {
  name: 'Mouse'

}
</script>

<style lang="scss" scoped>

.mouse__icon {
  display: block;
  z-index: 999;
  animation: dragAnimationMouse 0.7s linear 0s infinite alternate;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>