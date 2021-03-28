<template>
<div>
  <h3>new products</h3>
  <p>
    画像 : <input>
    商品名 : <input>
    仕入れ値 : <input>
    場所 : <select>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>


  </p>
  <button>送信</button>
</div>
</template>

<script>
export default {
  name:'NewProduct'
}
</script>

<style>

</style>
