import { Component, Vue } from "vue-property-decorator"
import router from "@/router"

@Component({})
export default class Home extends Vue {
  public title: string = "あみだくじツクール"

  /**
   * あみだくじ作成ページに遷移
   */
  public linkCreatePage() {
    return router.push("/create")
  }
}
