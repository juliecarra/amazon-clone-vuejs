<!-- URL to this page is /products -->
<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add a new product</h2>
            <form>
              <!-- Category Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select class="a-select-option" v-model="category">
                  <option
                    v-for="category in categories"
                    v-bind:value="category._id"
                    :key="category._id"
                    >{{ category.type }}</option
                  >
                </select>
              </div>
              <!-- Owner Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option" v-model="owner">
                  <option
                    v-for="owner in owners"
                    :value="owner._id"
                    :key="owner._id"
                    >{{ owner.name }}</option
                  >
                </select>
              </div>
              <!-- Title Input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Title</label>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="title"
                />
              </div>
              <!-- Price Input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Price</label>
                <input
                  type="number"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="price"
                />
              </div>
              <!-- Stock Quantity Input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Stock Quantity</label>
                <input
                  type="number"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="stockQuantity"
                />
              </div>
              <!-- Description Input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Description</label>
                <textarea
                  placeholder="Provide details such as a product description"
                  style="width: 100%"
                  v-model="description"
                ></textarea>
              </div>
              <!-- Photo Input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Add Image</label>
                <div class="a-row a-spacing-top-medium">
                  <!-- <label for class="choosefile-button">
                  <i class="fal fa-plus"></i>-->
                  <input
                    type="file"
                    ref="file"
                    v-on:change="handleImageUpload"
                  />
                  <p style="margin-top: -70px">{{ imageName }}</p>
                  <!-- </label> -->
                </div>
              </div>
              <!-- Button -->
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" v-on:click="submitForm"
                      >Add Product</span
                    >
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  //Use asyncData to perform API calls.
  async asyncData({ $axios }) {
    try {
      let getCategories = $axios.$get("/api/categories");
      let getOwners = $axios.$get("/api/owners");
      const [categoriesRes, ownersRes] = await Promise.all([
        getCategories,
        getOwners
      ]);

      return {
        owners: ownersRes.owners,
        categories: categoriesRes.categories
      };
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      title: "",
      description: "",
      image: "",
      imageName: "",
      price: 0,
      stockQuantity: 1,
      category: null,
      owner: null
    };
  },
  methods: {
    handleImageUpload(e) {
      this.image = this.$refs.file.files[0];
      console.log(this.image);
      this.imageName = e.target.files[0].name;
    },

    async submitForm() {
      try {
        // Initialize the form data
        let formData = new FormData();

        // Add the form data we need to submit

        formData.append("title", this.title);
        formData.append("description", this.description);
        formData.append("image", this.image, this.imageName);
        formData.append("price", this.price);
        formData.append("stockQuantity", this.stockQuantity);
        formData.append("category", this.category);
        formData.append("owner", this.owner);

        //   Make the request to the POST http://localhost:8080/api/products URL

        await this.$axios.$post("/api/products", formData);

        // Redirect to admin page
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
