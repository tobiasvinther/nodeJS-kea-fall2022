<script>
    import { fridgeMessageStore } from "../../store/fridgeBulletinStore.js";

    //en writable store består af tre ting: set (sæt ny værdi), update (bruge en eksisterende værdi til at opdatere),
    //subscribe (en måde at få fat i data på)

    console.log($fridgeMessageStore) //dollartegn foran betyder man tilgår værdien
</script>

<h3>Family Home</h3>

<h4>Fridge Bulleting</h4>
<p>{$fridgeMessageStore}</p>

<slot></slot>

<p>-----------------</p>
<p>|    Welcome     |</p>
<p>-----------------</p>