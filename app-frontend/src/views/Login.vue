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

              <img src="../assets/src/assets/img/customize/hnue-logo.png" alt="auth-img">

              <h1 class="mt-5 text-danger fw-bold px-2">HỆ THỐNG HỖ TRỢ ĐÁNH GIÁ...
              </h1>
            </div>
            <p class="position-absolute text-center bottom-0 text-white fw-bold px-2">Copyright&copy;2022 Khoa Công nghệ thông tin - Trường
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
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">Tên tài khoản/email</label>
                    <input type="text" placeholder="Tên tài khoản/email" class="form-control">
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-4">
                    <label class="form-label">Mật khẩu</label>
                    <input type="password" placeholder="Mật khẩu" class="form-control">
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <div class="form-check form-check-primary form-check-inline">
                      <input class="form-check-input me-3" type="checkbox"
                             id="form-check-default">
                      <label class="form-check-label" for="form-check-default">
                        Nhớ tên tài khoản
                      </label>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="mb-4">
                    <button class="btn btn-secondary w-100">Đăng nhập</button>
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

<script>
import '@/assets/src/assets/css/light/authentication/auth-cover.css';
import '@/assets/src/assets/css/dark/authentication/auth-cover.css';

export default {

}
</script>

<style scoped>

</style>