(self.webpackChunkta_sys_online=self.webpackChunkta_sys_online||[]).push([[9791],{43516:(e,t,s)=>{"use strict";s.d(t,{r:()=>r});var i=s(42693),o=s(49783);let r=(()=>{class e{constructor(e){this.http=e,this.apiMedicineUrl="https://ta-sys-online.azurewebsites.net/medicines"}fetchMedicine(e,t){const s=(new i.LE).set("page",e).set("size",t);return console.log(s.toString()),this.http.get(this.apiMedicineUrl,{params:s,reportProgress:!0,observe:"body"})}searchMedicineByName(e,t,s){const o=(new i.LE).set("value",e).set("page",t).set("size",s);return console.log(o.toString()),this.http.post(this.apiMedicineUrl+"/searchByName",{},{params:o,reportProgress:!0,observe:"body"})}filterMedicineByPrice(e,t,s,o){const r=(new i.LE).set("criteria",e).set("value",t).set("page",s).set("size",o);return console.log(r.toString()),this.http.post(this.apiMedicineUrl,{},{params:r,reportProgress:!0,observe:"body"})}filterMedicineByCategory(e,t,s){const o=(new i.LE).set("value",e).set("page",t).set("size",s);return console.log(o.toString()),this.http.post(this.apiMedicineUrl+"/filterByCategory",{},{params:o,reportProgress:!0,observe:"body"})}sortMedicineByName(e,t,s){const o=(new i.LE).set("value",e).set("page",t).set("size",s);return console.log(o.toString()),this.http.post(this.apiMedicineUrl+"/sortByName",{},{params:o,reportProgress:!0,observe:"body"})}sortMedicineByPrice(e,t,s){const o=(new i.LE).set("value",e).set("page",t).set("size",s);return console.log(o.toString()),this.http.post(this.apiMedicineUrl+"/sortByPrice",{},{params:o,reportProgress:!0,observe:"body"})}uploadMedicine(e){return this.http.post(this.apiMedicineUrl,e,{reportProgress:!0,observe:"body"})}generateRandomMedicine(){return this.http.post(this.apiMedicineUrl+"/randomMedicine",{reportProgress:!0,observe:"body"})}deleteAllMedicines(){return this.http.post(this.apiMedicineUrl+"/deleteAll",{reportProgress:!0,observe:"body"})}deleteMedicine(e){return this.http.delete(this.apiMedicineUrl+`/${e}`,{reportProgress:!0,observe:"body"})}getMedicine(e){return this.http.get(this.apiMedicineUrl+`/${e}`,{reportProgress:!0,observe:"body"})}deleteSelectedMedicines(e){return this.http.post(this.apiMedicineUrl+"/batch",e,{reportProgress:!0,observe:"body"})}updateMedicine(e,t){return this.http.post(this.apiMedicineUrl+`/updateMedicine/${t}`,e,{reportProgress:!0,observe:"body"})}fetchAll(){return this.http.post(this.apiMedicineUrl+"/fetchAll",{},{reportProgress:!0,observe:"body"})}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(i.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},49791:(e,t,s)=>{"use strict";s.d(t,{s:()=>l});var i=s(61305),o=s(41142),r=s(49783),a=s(43516),n=s(60310);const c={medicineList:[],selectedMedicine:{},exportData:[],medicineInstance:void 0,totalPages:0,currentPage:0,totalItems:0,responseMsg:""};let l=(()=>{class e extends i.b{constructor(e,t){super(c),this.medicineService=e,this.store=t,this.$medicineList=this.select(e=>e.medicineList),this.$medicineInstance=this.select(e=>e.medicineInstance),this.$exportData=this.select(e=>e.exportData),this.$totalPages=this.select(e=>e.totalPages),this.$totalItems=this.select(e=>e.totalItems),this.$currentPage=this.select(e=>e.currentPage),this.$selectedMedicine=this.select(e=>e.selectedMedicine)}fillEmpty(e,t,s,i){let o=s,r=e*t;for(var a=0;a<i.length;a++)o[r]=i[a],r++;return console.log("Filled array result"),console.log(o),o}initInfiniteData(e,t){return this.medicineService.fetchMedicine(e,t).toPromise().then(e=>{this.setState({medicineList:new Array(e.items.length)}),console.log("Current flag: infite list"),console.log(this.state.medicineList),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage})}).then(()=>{this.loadDataAsync(e,t)})}loadInfiniteDataAsync(e,t){this.setIsLoading(!0),this.medicineService.fetchMedicine(e,t).subscribe({next:e=>{this.setState({medicineList:this.state.medicineList.concat(e.items)}),console.log("Infinite list"),console.log(this.state.medicineList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}})}initData(e,t){this.medicineService.fetchMedicine(e,t).toPromise().then(e=>{this.setState({medicineList:new Array(e.totalItems)}),console.log("Current flag: pure list"),console.log(this.state.medicineList),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage})}).then(()=>{this.loadDataAsync(e,t)})}initFilterByCategoryData(e,t,s){this.store.showNotif("Filtered Mode On","custom"),this.medicineService.filterMedicineByCategory(e,0,5).toPromise().then(e=>{this.setState({medicineList:new Array(e.totalItems)}),console.log("Current flag: filtered list"),console.log(this.state.medicineList),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage})}).then(()=>{this.filterMedicineByCategory(e,t,s)})}initInfiniteFilterByCategoryData(e,t,s){this.store.showNotif("Filtered Mode On","custom"),this.medicineService.filterMedicineByCategory(e,t,s).toPromise().then(e=>{this.setState({medicineList:new Array(e.items.length)}),console.log("Current flag: infinite filtered list"),console.log(this.state.medicineList),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage})}).then(()=>{this.filterMedicineByCategory(e,t,s)})}initSearchByNameData(e,t,s){this.store.showNotif("Searched Mode On","custom"),this.medicineService.searchMedicineByName(e,0,5).toPromise().then(e=>{this.setState({medicineList:new Array(e.totalItems)}),console.log("Current flag: searched list"),console.log(this.state.medicineList),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage})}).then(()=>{this.searchMedicineByName(e,t,s)})}initInfiniteSearchByNameData(e,t,s){this.store.showNotif("Searched Mode On","custom"),this.medicineService.searchMedicineByName(e,t,s).toPromise().then(e=>{0!==e.totalItems?this.setState({medicineList:new Array(e.items.length)}):this.store.showNotif("No result found!","custom"),console.log("Current flag: infitite searched list"),console.log(this.state.medicineList),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage})}).then(()=>{this.searchMedicineByName(e,t,s)})}initSortByPriceData(e,t,s){this.store.showNotif("Sort Mode On","custom"),this.medicineService.sortMedicineByPrice(e,0,5).toPromise().then(e=>{this.setState({medicineList:new Array(e.totalItems)}),console.log("Current flag: sort list"),console.log(this.state.medicineList),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage})}).then(()=>{this.sortMedicineByPrice(e,t,s)})}initInfiniteSortByPriceData(e,t,s){this.store.showNotif("Sort Mode On","custom"),this.medicineService.sortMedicineByPrice(e,t,s).toPromise().then(e=>{this.setState({medicineList:new Array(e.items.length)}),console.log("Current flag: sort list"),console.log(this.state.medicineList),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage})}).then(()=>{this.sortMedicineByPrice(e,t,s)})}loadDataAsync(e,t){this.setIsLoading(!0),this.medicineService.fetchMedicine(e,t).subscribe({next:s=>{this.setState({medicineList:this.fillEmpty(e,t,this.state.medicineList,s.items)}),console.log("Pure list"),console.log(this.state.medicineList),console.log("Server response"),console.log(s),this.setState({totalItems:s.totalItems}),this.setState({totalPages:s.totalPages}),this.setState({currentPage:s.currentPage}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}})}refresh(e,t){this.setIsLoading(!0),this.medicineService.fetchMedicine(e,t).subscribe({next:s=>{this.setState({medicineList:this.fillEmpty(e,t,this.state.medicineList,s.items)}),this.setState({totalItems:s.totalItems}),this.setState({totalPages:s.totalPages}),this.setState({currentPage:s.currentPage}),console.log("Pure list"),console.log(this.state.medicineList),console.log("Server response"),console.log(s),this.store.showNotif("Refresh successfully","custom"),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}})}setIsLoading(e){this.store.setIsLoading(e)}uploadMedicine(e,t,s){this.confirmDialog("").then(i=>{i&&(this.setIsLoading(!0),this.medicineService.uploadMedicine(e).subscribe({next:e=>{this.setState({responseMsg:e}),this.setTotalItems(this.state.totalItems+1),console.log(e),this.loadDataAsync(t,s),this.setIsLoading(!1),this.store.showNotif(e.message,"custom")},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}}))})}updateMedicine(e,t,s,i){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.medicineService.updateMedicine(e,t).subscribe({next:e=>{this.setState({responseMsg:e}),console.log(e),this.loadDataAsync(s,i),this.setIsLoading(!1),this.store.showNotif(e.message,"custom")},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}}))})}confirmDialog(e){return(0,o.iG)(""!=e?`<b>${e}</b>`:"<b>Are you sure?</b>","Confirm changes")}deleteSelectedMedicines(e,t,s){this.confirmDialog("").then(i=>{i&&(this.setIsLoading(!0),this.medicineService.deleteSelectedMedicines(e).subscribe({next:e=>{this.setState({responseMsg:e}),console.log(e),this.loadDataAsync(t,s),console.log(this.state.medicineList),this.setIsLoading(!1),this.store.showNotif(e.message,"custom")},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}}))})}deleteAllMedicines(){this.confirmDialog("Delete all items?").then(e=>{e&&(this.setIsLoading(!0),this.medicineService.deleteAllMedicines().subscribe({next:e=>{this.setState({responseMsg:e}),this.setState({medicineList:[]}),this.setState({totalPages:0}),this.setState({currentPage:0}),this.setState({totalItems:0}),console.log(e),this.setIsLoading(!1),this.store.showNotif(e.message,"custom")},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}}))})}deleteMedicine(e,t,s){this.confirmDialog("").then(i=>{i&&(this.setIsLoading(!0),this.medicineService.deleteMedicine(e).subscribe({next:e=>{this.setState({responseMsg:e}),this.setTotalItems(this.state.totalItems-1),console.log(e),this.loadDataAsync(t,s),this.setIsLoading(!1),this.store.showNotif(e.message,"custom")},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}}))})}selectMedicine(e){this.setState({selectedMedicine:e})}setTotalPages(e){this.setState({totalPages:e})}setTotalItems(e){this.setState({totalItems:e})}setCurrentPage(e){this.setState({currentPage:e})}getMedicine(e){return this.setIsLoading(!0),this.medicineService.getMedicine(e).toPromise().then(e=>{this.setState({medicineInstance:e}),console.log(e),this.setIsLoading(!1)})}filterMedicineByPrice(e,t,s,i){this.setIsLoading(!0),this.medicineService.filterMedicineByPrice(e,t,s,i).subscribe({next:e=>{this.setState({responseMsg:e}),this.setState({medicineList:this.fillEmpty(s,i,this.state.medicineList,e.items)}),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}})}filterMedicineByCategory(e,t,s){this.setIsLoading(!0),this.medicineService.filterMedicineByCategory(e,t,s).subscribe({next:e=>{this.setState({medicineList:this.fillEmpty(t,s,this.state.medicineList,e.items)}),console.log("Filtered list"),console.log(this.state.medicineList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}})}filterInfiniteMedicineByCategory(e,t,s){this.setIsLoading(!0),this.medicineService.filterMedicineByCategory(e,t,s).subscribe({next:e=>{this.setState({medicineList:this.state.medicineList.concat(e.items)}),console.log("Filtered list"),console.log(this.state.medicineList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}})}searchMedicineByName(e,t,s){this.setIsLoading(!0),this.medicineService.searchMedicineByName(e,t,s).subscribe({next:e=>{0!==e.totalItems?this.setState({medicineList:this.fillEmpty(t,s,this.state.medicineList,e.items)}):this.store.showNotif("No result found!","custom"),console.log("Searched list"),console.log(this.state.medicineList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}})}searchInfiniteMedicineByName(e,t,s){this.setIsLoading(!0),this.medicineService.searchMedicineByName(e,t,s).subscribe({next:e=>{0!==e.totalItems?this.setState({medicineList:this.state.medicineList.concat(e.items)}):this.store.showNotif("No result found!","custome"),console.log("Infite searched list"),console.log(this.state.medicineList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}})}sortMedicineByName(e,t,s){this.setIsLoading(!0),this.medicineService.sortMedicineByName(e,t,s).subscribe({next:e=>{this.setState({responseMsg:e}),this.setState({medicineList:this.fillEmpty(t,s,this.state.medicineList,e.items)}),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage}),console.log("Sorted list"),console.log(this.state.medicineList),console.log("Server response"),console.log(e),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}})}sortMedicineByPrice(e,t,s){this.setIsLoading(!0),this.medicineService.sortMedicineByPrice(e,t,s).subscribe({next:e=>{this.setState({responseMsg:e}),this.setState({medicineList:this.fillEmpty(t,s,this.state.medicineList,e.items)}),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage}),console.log("Sorted list"),console.log(this.state.medicineList),console.log("Server response"),console.log(e),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}})}sortInfiniteMedicineByPrice(e,t,s){this.setIsLoading(!0),this.medicineService.sortMedicineByPrice(e,t,s).subscribe({next:e=>{this.setState({medicineList:this.state.medicineList.concat(e.items)}),console.log("Infite sorted list"),console.log(this.state.medicineList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalItems}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.currentPage}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.errorMessage,"error"),console.log(e)}})}setExportData(e){this.setState({medicineList:e})}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(a.r),r.LFG(n.d))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);