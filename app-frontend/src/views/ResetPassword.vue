<template>
  <div class="auth-container d-flex">
    <div class="container mx-auto align-self-center">
      <div class="row">
        <div
            class="col-6 d-lg-flex d-none h-100 my-auto top-0 start-0 text-center justify-content-center flex-column">
          <div class="auth-cover-bg-image"></div>
          <div class="auth-overlay"></div>

          <div class="auth-cover">

            <div class="position-relative">

              <img src="@/assets/src/assets/img/customize/fit.ico" alt="auth-img">

              <h1 class="mt-5 text-danger fw-bold px-2">HỆ THỐNG HỖ TRỢ ĐÁNH GIÁ...
              </h1>
            </div>
            <p class="position-absolute text-center bottom-0 text-black fw-bold px-2">Copyright&copy;2022 Khoa Công nghệ thông tin - Trường
              Đại học Sư phạm Hà Nội</p>
          </div>

        </div>

        <div
            class="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-12 d-flex flex-column align-self-center ms-lg-auto me-lg-0 mx-auto">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12 mb-3">
                  <img src="../assets/src/assets/img/customize/website-02.svg" alt="">
                </div>
                <div class="col-md-12 mb-3">
                  <h2>Đặt lại mật khẩu</h2>
                  <p>Vui lòng nhập email liên kết với tài khoản.</p>

                </div>
                <div class="mb-4 col-md-12">
                  <div class="input-group">
                    <span class="input-group-text"><i class="bi bi-envelope-fill"></i></span>
                    <div class="form-floating">
                      <input type="text" class="form-control"  placeholder="Địa chỉ email">
                      <label >Địa chỉ email</label>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="mb-4">
                    <button class="btn btn-secondary w-100">Đặt lại mật khẩu</button>
                  </div>
                </div>

                <div class="col-12 mb-4">
                  <div class="">
                    <div class="seperator">
                      <hr>
                      <div class="seperator-text"> <span>Hoặc</span></div>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="mb-4">
                    <router-link to="/login"><button class="btn btn-outline-primary w-100">Đăng nhập</button></router-link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import '@/assets/src/assets/css/light/authentication/auth-cover.css';
import '@/assets/src/assets/css/dark/authentication/auth-cover.css';
import {ref} from "vue";

let btnLoginText = ref('Đăng nhập');

</script>

<style scoped>

</style>