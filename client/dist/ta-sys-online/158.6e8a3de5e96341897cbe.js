(self.webpackChunkta_sys_online=self.webpackChunkta_sys_online||[]).push([[158],{12819:(t,e,s)=>{"use strict";s.d(e,{v:()=>i});var o=s(42693),r=s(8619);let i=(()=>{class t{constructor(t){this.http=t,this.apiUrl="https://ta-sys-online-server.azurewebsites.net/api/Test"}fetchTest(t,e){const s=(new o.LE).set("PageNumber",t).set("PageSize",e);return console.log(s.toString()),this.http.get(this.apiUrl+"/paging",{params:s,reportProgress:!0,observe:"body"})}fetchTestByLearnerID(t,e,s){const r=(new o.LE).set("PageNumber",t).set("PageSize",e).set("Id",s);return console.log(r.toString()),this.http.get(this.apiUrl+"/byLearnerID",{params:r,reportProgress:!0,observe:"body"})}searchTestByProperty(t,e,s,r){const i=(new o.LE).set("Property",t).set("Value",e).set("PageNumber",s).set("PageSize",r);return console.log(i.toString()),this.http.get(this.apiUrl+"/search",{params:i,reportProgress:!0,observe:"body"})}filterTestByProperty(t,e,s,r){const i=(new o.LE).set("Value",e).set("Property",t).set("PageNumber",s).set("PageSize",r);return console.log(i.toString()),this.http.get(this.apiUrl+"/filter",{params:i,reportProgress:!0,observe:"body"})}filterSearchTestByProperty(t,e,s,r,i,a){const l=(new o.LE).set("FilterValue",e).set("FilterProperty",t).set("SearchValue",r).set("SearchProperty",s).set("PageNumber",i).set("PageSize",a);return console.log(l.toString()),this.http.get(this.apiUrl+"/filter-search",{params:l,reportProgress:!0,observe:"body"})}sortTestByProperty(t,e,s,r){const i=(new o.LE).set("SortBy",t).set("Order",e).set("PageNumber",s).set("PageSize",r);return console.log(i.toString()),this.http.get(this.apiUrl+"/paging",{params:i,reportProgress:!0,observe:"body"})}uploadTest(t){return this.http.post(this.apiUrl,t,{reportProgress:!0,observe:"body"})}generateRandomTest(){return this.http.post(this.apiUrl+"/randomTest",{reportProgress:!0,observe:"body"})}deleteTest(t){return this.http.post(this.apiUrl+"/delete",t,{reportProgress:!0,observe:"body"})}deleteAll(){return this.http.delete(this.apiUrl,{reportProgress:!0,observe:"body"})}getTest(t){return this.http.get(this.apiUrl+`/${t}`,{reportProgress:!0,observe:"body"})}updateTest(t){return this.http.put(this.apiUrl,t,{reportProgress:!0,observe:"body"})}fetchAll(){return this.http.get(this.apiUrl,{reportProgress:!0,observe:"body"})}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(o.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},90158:(t,e,s)=>{"use strict";s.d(e,{t:()=>c});var o=s(61305),r=s(41142),i=s(8619),a=s(12819),l=s(10418),h=s(6614);const n={testList:[],selectedTest:{},testInstance:void 0,exportData:[],totalPages:0,currentPage:0,totalItems:0,responseMsg:""};let c=(()=>{class t extends o.b{constructor(t,e,s){super(n),this.testService=t,this.store=e,this.fileStore=s,this.$testList=this.select(t=>t.testList),this.$exportData=this.select(t=>t.exportData),this.$totalPages=this.select(t=>t.totalPages),this.$totalItems=this.select(t=>t.totalItems),this.$currentPage=this.select(t=>t.currentPage),this.$selectedTest=this.select(t=>t.selectedTest),this.$testInstance=this.select(t=>t.testInstance)}fillEmpty(t,e,s,o){let r=s;console.log("FILL INDEX");let i=t*e;console.log(i);for(var a=0;a<o.length;a++)r[i]=o[a],i++;return console.log("Filled array result"),console.log(r),r}fetchMediaBySourceID(t){const e=t.map(t=>t.id);this.fileStore.getFiles(e)}initInfiniteData(t,e){return this.testService.fetchTest(t,e).toPromise().then(t=>{this.setState({testList:t.data}),this.fetchMediaBySourceID(t.data),console.log("Current flag: infite list"),console.log(this.state.testList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})})}loadInfiniteDataAsync(t,e){this.setIsLoading(!0),this.testService.fetchTest(t,e).subscribe({next:t=>{this.setState({testList:this.state.testList.concat(t.data)}),this.fetchMediaBySourceID(t.data),console.log("Infinite list"),console.log(this.state.testList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}loadDataAsyncByLearnerID(t,e,s){this.setIsLoading(!0),this.testService.fetchTestByLearnerID(t,e,s).subscribe({next:s=>{this.setState({testList:this.fillEmpty(t-1,e,this.state.testList,s.data)}),console.log("Pure list"),console.log(this.state.testList),console.log("Server response"),console.log(s),this.setState({totalItems:s.totalRecords}),this.setState({totalPages:s.totalPages}),this.setState({currentPage:s.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}initInfiniteDataByLearnerID(t,e,s){return this.testService.fetchTestByLearnerID(t,e,s).toPromise().then(t=>{this.setState({testList:t.data}),console.log("Current flag: infite list"),console.log(this.state.testList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})})}loadInfiniteDataAsyncByLearnerID(t,e,s){this.setIsLoading(!0),this.testService.fetchTestByLearnerID(t,e,s).subscribe({next:t=>{this.setState({testList:this.state.testList.concat(t.data)}),console.log("Infinite list"),console.log(this.state.testList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}initData(t,e){this.testService.fetchTest(t,e).toPromise().then(t=>{this.setState({testList:new Array(t.totalRecords)}),console.log("Current flag: pure list"),console.log(this.state.testList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})}).then(()=>{this.loadDataAsync(t,e)})}initFilterByPropertyData(t,e,s,o){this.store.showNotif("Filtered Mode On","custom"),this.testService.filterTestByProperty(t,e,s,o).toPromise().then(t=>{this.setState({testList:new Array(t.totalRecords)}),console.log("Current flag: filtered list"),console.log(this.state.testList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})}).then(()=>{this.filterTestByProperty(t,e,s,o)})}initInfiniteFilterByPropertyData(t,e,s,o){this.store.showNotif("Filtered Mode On","custom"),this.testService.filterTestByProperty(t,e,s,o).toPromise().then(t=>{this.setState({testList:t.data}),this.fetchMediaBySourceID(t.data),console.log("Current flag: infinite filtered list"),console.log(this.state.testList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})})}initSearchByPropertyData(t,e,s,o){this.store.showNotif("Searched Mode On","custom"),this.testService.searchTestByProperty(t,e,s,o).toPromise().then(t=>{this.setState({testList:new Array(t.totalRecords)}),console.log("Current flag: searched list"),console.log(this.state.testList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})}).then(()=>{this.searchTestByProperty(t,e,s,o)})}initInfiniteSearchByPropertyData(t,e,s,o){this.store.showNotif("Searched Mode On","custom"),this.testService.searchTestByProperty(t,e,s,o).toPromise().then(t=>{0!==t.totalRecords?(this.setState({testList:t.data}),this.fetchMediaBySourceID(t.data)):this.store.showNotif("No result found!","custom"),console.log("Current flag: infitite searched list"),console.log(this.state.testList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})})}initInfiniteFilterSearchByPropertyData(t,e,s,o,r,i){this.store.showNotif("Searched Mode On","custom"),this.testService.filterSearchTestByProperty(t,e,s,o,r,i).toPromise().then(t=>{0!==t.totalRecords?(this.setState({testList:t.data}),this.fetchMediaBySourceID(t.data)):this.store.showNotif("No result found!","custom"),console.log("Current flag: infitite searched list"),console.log(this.state.testList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})})}initSortByPropertyData(t,e,s,o){this.store.showNotif("Sort Mode On","custom"),this.testService.sortTestByProperty(t,e,s,o).toPromise().then(t=>{this.setState({testList:new Array(t.totalRecords)}),console.log("Current flag: sort list"),console.log(this.state.testList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})}).then(()=>{this.sortTestByProperty(t,e,s,o)})}initInfiniteSortByPropertyData(t,e,s,o){this.store.showNotif("Sort Mode On","custom"),this.testService.sortTestByProperty(t,e,s,o).toPromise().then(t=>{this.setState({testList:t.data}),this.fetchMediaBySourceID(t.data),console.log("Current flag: sort list"),console.log(this.state.testList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})})}loadDataAsync(t,e){this.setIsLoading(!0),this.testService.fetchTest(t,e).subscribe({next:s=>{this.setState({testList:this.fillEmpty(t-1,e,this.state.testList,s.data)}),console.log("Pure list"),console.log(this.state.testList),console.log("Server response"),console.log(s),this.setState({totalItems:s.totalRecords}),this.setState({totalPages:s.totalPages}),this.setState({currentPage:s.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}refresh(t,e){this.setIsLoading(!0),this.testService.fetchTest(t,e).subscribe({next:s=>{this.setState({testList:this.fillEmpty(t-1,e,this.state.testList,s.data)}),this.setState({totalItems:s.totalRecords}),this.setState({totalPages:s.totalPages}),this.setState({currentPage:s.pageNumber}),console.log("Pure list"),console.log(this.state.testList),console.log("Server response"),console.log(s),this.store.showNotif("Refresh successfully","custom"),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}setIsLoading(t){this.store.setIsLoading(t)}uploadTest(t,e,s){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.testService.uploadTest(t).subscribe({next:t=>{this.setState({responseMsg:t}),this.setTotalItems(this.state.totalItems+1),console.log(t),this.loadDataAsync(e,s),this.setIsLoading(!1),this.store.showNotif(t.responseMessage,"custom")},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}}))})}updateTest(t,e,s){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.testService.updateTest(t).subscribe({next:t=>{this.setState({responseMsg:t}),console.log(t),this.loadDataAsync(e,s),this.setIsLoading(!1),this.store.showNotif(t.responseMessage,"custom")},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}}))})}confirmDialog(t){return(0,r.iG)(""!=t?`<b>${t}</b>`:"<b>Are you sure?</b>","Confirm changes")}deleteSelectedTests(t,e,s){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.testService.deleteTest(t).subscribe({next:t=>{this.setState({responseMsg:t}),console.log(t),this.loadDataAsync(e,s),console.log(this.state.testList),this.setIsLoading(!1),this.store.showNotif(t.responseMessage,"custom")},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}}))})}deleteAll(){this.confirmDialog("Delete all items?").then(t=>{t&&(this.setIsLoading(!0),this.testService.deleteAll().subscribe({next:t=>{this.resetState(),console.log(t),this.setIsLoading(!1),this.store.showNotif(t.responseMessage,"custom")},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}}))})}deleteTest(t,e,s){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.testService.deleteTest(t).subscribe({next:t=>{this.setState({responseMsg:t}),this.setTotalItems(this.state.totalItems-1),console.log(t),this.loadDataAsync(e,s),this.setIsLoading(!1),this.store.showNotif(t.responseMessage,"custom")},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}}))})}selectTest(t){this.setState({selectedTest:t})}setTotalPages(t){this.setState({totalPages:t})}setTotalItems(t){this.setState({totalItems:t})}setCurrentPage(t){this.setState({currentPage:t})}filterTestByProperty(t,e,s,o){this.setIsLoading(!0),this.testService.filterTestByProperty(t,e,s,o).subscribe({next:t=>{0!==t.totalRecords&&(this.setState({testList:this.fillEmpty(s-1,o,this.state.testList,t.data)}),console.log("Filtered list"),console.log(this.state.testList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}filterInfiniteTestByProperty(t,e,s,o){this.setIsLoading(!0),this.testService.filterTestByProperty(t,e,s,o).subscribe({next:t=>{t.data.length&&(this.setState({testList:this.state.testList.concat(t.data)}),this.fetchMediaBySourceID(t.data)),console.log("Filtered list"),console.log(this.state.testList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}filterSearchInfiniteTestByProperty(t,e,s,o,r,i){this.setIsLoading(!0),this.testService.filterSearchTestByProperty(t,e,s,o,r,i).subscribe({next:t=>{0!==t.totalRecords?t.data.length&&(this.setState({testList:this.state.testList.concat(t.data)}),this.fetchMediaBySourceID(t.data)):this.store.showNotif("No result found!","custom"),console.log("Infite searched list"),console.log(this.state.testList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}searchTestByProperty(t,e,s,o){this.setIsLoading(!0),this.testService.searchTestByProperty(t,e,s,o).subscribe({next:t=>{0!==t.totalRecords?this.setState({testList:this.fillEmpty(s-1,o,this.state.testList,t.data)}):this.store.showNotif("No result found!","custom"),console.log("Searched list"),console.log(this.state.testList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}searchInfiniteTestByProperty(t,e,s,o){this.setIsLoading(!0),this.testService.searchTestByProperty(t,e,s,o).subscribe({next:t=>{0!==t.totalRecords?t.data.length&&(this.setState({testList:this.state.testList.concat(t.data)}),this.fetchMediaBySourceID(t.data)):this.store.showNotif("No result found!","custome"),console.log("Infite searched list"),console.log(this.state.testList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}sortTestByProperty(t,e,s,o){this.setIsLoading(!0),this.testService.sortTestByProperty(t,e,s,o).subscribe({next:t=>{this.setState({responseMsg:t}),this.setState({testList:this.fillEmpty(s-1,o,this.state.testList,t.data)}),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),console.log("Sorted list"),console.log(this.state.testList),console.log("Server response"),console.log(t),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}sortInfiniteTestByProperty(t,e,s,o){this.setIsLoading(!0),this.testService.sortTestByProperty(t,e,s,o).subscribe({next:t=>{t.data.length&&(this.setState({testList:this.state.testList.concat(t.data)}),this.fetchMediaBySourceID(t.data)),console.log("Infite sorted list"),console.log(this.state.testList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}getTest(t){return this.setIsLoading(!0),this.testService.getTest(t).toPromise().then(t=>{this.setState({testInstance:t}),console.log(t),this.setIsLoading(!1)})}setExportData(t){this.setState({testList:t})}resetState(){this.setState(n)}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(a.v),i.LFG(l.d),i.LFG(h.V))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);