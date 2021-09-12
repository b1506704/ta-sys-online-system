(self.webpackChunkta_sys_online=self.webpackChunkta_sys_online||[]).push([[17],{83017:(e,t,s)=>{"use strict";s.r(t),s.d(t,{EditMessageListModule:()=>C});var o=s(61116),a=s(46553),i=s(47592),r=s(98633),n=s(65294),l=s(23651),g=(s(52279),s(62707)),h=s(82051),c=s.n(h),d=s(8619),u=s(61305),p=s(41142),m=s(42693);let S=(()=>{class e{constructor(e){this.http=e,this.apiUrl="https://ta-sys-online-server.azurewebsites.net/api/Message"}fetchMessage(e,t){const s=(new m.LE).set("PageNumber",e).set("PageSize",t);return console.log(s.toString()),this.http.get(this.apiUrl+"/paging",{params:s,reportProgress:!0,observe:"body"})}fetchMessageByLearnerID(e,t,s){const o=(new m.LE).set("PageNumber",e).set("PageSize",t).set("Id",s);return console.log(o.toString()),this.http.get(this.apiUrl+"/byLearnerID",{params:o,reportProgress:!0,observe:"body"})}searchMessageByProperty(e,t,s,o){const a=(new m.LE).set("Property",e).set("Value",t).set("PageNumber",s).set("PageSize",o);return console.log(a.toString()),this.http.get(this.apiUrl+"/search",{params:a,reportProgress:!0,observe:"body"})}filterMessageByProperty(e,t,s,o){const a=(new m.LE).set("Value",t).set("Property",e).set("PageNumber",s).set("PageSize",o);return console.log(a.toString()),this.http.get(this.apiUrl+"/filter",{params:a,reportProgress:!0,observe:"body"})}sortMessageByProperty(e,t,s,o){const a=(new m.LE).set("SortBy",e).set("Order",t).set("PageNumber",s).set("PageSize",o);return console.log(a.toString()),this.http.get(this.apiUrl+"/paging",{params:a,reportProgress:!0,observe:"body"})}uploadMessage(e){return this.http.post(this.apiUrl,e,{reportProgress:!0,observe:"body"})}generateRandomMessage(){return this.http.post(this.apiUrl+"/randomMessage",{reportProgress:!0,observe:"body"})}deleteMessage(e){return this.http.post(this.apiUrl+"/delete",e,{reportProgress:!0,observe:"body"})}deleteAll(){return this.http.delete(this.apiUrl,{reportProgress:!0,observe:"body"})}getMessage(e){return this.http.get(this.apiUrl+`/${e}`,{reportProgress:!0,observe:"body"})}updateMessage(e){return this.http.put(this.apiUrl,e,{reportProgress:!0,observe:"body"})}fetchAll(){return this.http.get(this.apiUrl,{reportProgress:!0,observe:"body"})}}return e.\u0275fac=function(t){return new(t||e)(d.LFG(m.eN))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var y=s(86150);const P={messageList:[],selectedMessage:{},messageInstance:void 0,exportData:[],totalPages:0,currentPage:0,totalItems:0,responseMsg:""};let f=(()=>{class e extends u.b{constructor(e,t){super(P),this.messageService=e,this.store=t,this.$messageList=this.select(e=>e.messageList),this.$exportData=this.select(e=>e.exportData),this.$totalPages=this.select(e=>e.totalPages),this.$totalItems=this.select(e=>e.totalItems),this.$currentPage=this.select(e=>e.currentPage),this.$selectedMessage=this.select(e=>e.selectedMessage),this.$messageInstance=this.select(e=>e.messageInstance)}fillEmpty(e,t,s,o){let a=s;console.log("FILL INDEX");let i=e*t;console.log(i);for(var r=0;r<o.length;r++)a[i]=o[r],i++;return console.log("Filled array result"),console.log(a),a}initInfiniteData(e,t){return this.messageService.fetchMessage(e,t).toPromise().then(e=>{this.setState({messageList:e.data}),console.log("Current flag: infite list"),console.log(this.state.messageList),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber})})}loadInfiniteDataAsync(e,t){this.setIsLoading(!0),this.messageService.fetchMessage(e,t).subscribe({next:e=>{this.setState({messageList:this.state.messageList.concat(e.data)}),console.log("Infinite list"),console.log(this.state.messageList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}})}loadDataAsyncByLearnerID(e,t,s){this.setIsLoading(!0),this.messageService.fetchMessageByLearnerID(e,t,s).subscribe({next:s=>{this.setState({messageList:this.fillEmpty(e-1,t,this.state.messageList,s.data)}),console.log("Pure list"),console.log(this.state.messageList),console.log("Server response"),console.log(s),this.setState({totalItems:s.totalRecords}),this.setState({totalPages:s.totalPages}),this.setState({currentPage:s.pageNumber}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}})}initInfiniteDataByLearnerID(e,t,s){return this.messageService.fetchMessageByLearnerID(e,t,s).toPromise().then(e=>{this.setState({messageList:e.data}),console.log("Current flag: infite list"),console.log(this.state.messageList),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber})})}loadInfiniteDataAsyncByLearnerID(e,t,s){this.setIsLoading(!0),this.messageService.fetchMessageByLearnerID(e,t,s).subscribe({next:e=>{this.setState({messageList:this.state.messageList.concat(e.data)}),console.log("Infinite list"),console.log(this.state.messageList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}})}initData(e,t){this.messageService.fetchMessage(e,t).toPromise().then(e=>{this.setState({messageList:new Array(e.totalRecords)}),console.log("Current flag: pure list"),console.log(this.state.messageList),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber})}).then(()=>{this.loadDataAsync(e,t)})}initFilterByPropertyData(e,t,s,o){this.store.showNotif("Filtered Mode On","custom"),this.messageService.filterMessageByProperty(e,t,s,o).toPromise().then(e=>{this.setState({messageList:new Array(e.totalRecords)}),console.log("Current flag: filtered list"),console.log(this.state.messageList),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber})}).then(()=>{this.filterMessageByProperty(e,t,s,o)})}initInfiniteFilterByPropertyData(e,t,s,o){this.store.showNotif("Filtered Mode On","custom"),this.messageService.filterMessageByProperty(e,t,s,o).toPromise().then(e=>{this.setState({messageList:e.data}),console.log("Current flag: infinite filtered list"),console.log(this.state.messageList),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber})})}initSearchByPropertyData(e,t,s,o){this.store.showNotif("Searched Mode On","custom"),this.messageService.searchMessageByProperty(e,t,s,o).toPromise().then(e=>{this.setState({messageList:new Array(e.totalRecords)}),console.log("Current flag: searched list"),console.log(this.state.messageList),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber})}).then(()=>{this.searchMessageByProperty(e,t,s,o)})}initInfiniteSearchByPropertyData(e,t,s,o){this.store.showNotif("Searched Mode On","custom"),this.messageService.searchMessageByProperty(e,t,s,o).toPromise().then(e=>{0!==e.totalRecords?this.setState({messageList:e.data}):this.store.showNotif("No result found!","custom"),console.log("Current flag: infitite searched list"),console.log(this.state.messageList),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber})})}initSortByPropertyData(e,t,s,o){this.store.showNotif("Sort Mode On","custom"),this.messageService.sortMessageByProperty(e,t,s,o).toPromise().then(e=>{this.setState({messageList:new Array(e.totalRecords)}),console.log("Current flag: sort list"),console.log(this.state.messageList),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber})}).then(()=>{this.sortMessageByProperty(e,t,s,o)})}initInfiniteSortByPropertyData(e,t,s,o){this.store.showNotif("Sort Mode On","custom"),this.messageService.sortMessageByProperty(e,t,s,o).toPromise().then(e=>{this.setState({messageList:e.data}),console.log("Current flag: sort list"),console.log(this.state.messageList),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber})})}loadDataAsync(e,t){this.setIsLoading(!0),this.messageService.fetchMessage(e,t).subscribe({next:s=>{this.setState({messageList:this.fillEmpty(e-1,t,this.state.messageList,s.data)}),console.log("Pure list"),console.log(this.state.messageList),console.log("Server response"),console.log(s),this.setState({totalItems:s.totalRecords}),this.setState({totalPages:s.totalPages}),this.setState({currentPage:s.pageNumber}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}})}refresh(e,t){this.setIsLoading(!0),this.messageService.fetchMessage(e,t).subscribe({next:s=>{this.setState({messageList:this.fillEmpty(e-1,t,this.state.messageList,s.data)}),this.setState({totalItems:s.totalRecords}),this.setState({totalPages:s.totalPages}),this.setState({currentPage:s.pageNumber}),console.log("Pure list"),console.log(this.state.messageList),console.log("Server response"),console.log(s),this.store.showNotif("Refresh successfully","custom"),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}})}setIsLoading(e){this.store.setIsLoading(e)}uploadMessage(e,t,s){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.messageService.uploadMessage(e).subscribe({next:e=>{this.setState({responseMsg:e}),this.setTotalItems(this.state.totalItems+1),console.log(e),this.loadDataAsync(t,s),this.setIsLoading(!1),this.store.showNotif(e.responseMessage,"custom")},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}}))})}updateMessage(e,t,s){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.messageService.updateMessage(e).subscribe({next:e=>{this.setState({responseMsg:e}),console.log(e),this.loadDataAsync(t,s),this.setIsLoading(!1),this.store.showNotif(e.responseMessage,"custom")},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}}))})}confirmDialog(e){return(0,p.iG)(""!=e?`<b>${e}</b>`:"<b>Are you sure?</b>","Confirm changes")}deleteSelectedMessages(e,t,s){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.messageService.deleteMessage(e).subscribe({next:e=>{this.setState({responseMsg:e}),console.log(e),this.loadDataAsync(t,s),console.log(this.state.messageList),this.setIsLoading(!1),this.store.showNotif(e.responseMessage,"custom")},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}}))})}deleteAll(){this.confirmDialog("Delete all items?").then(e=>{e&&(this.setIsLoading(!0),this.messageService.deleteAll().subscribe({next:e=>{this.resetState(),console.log(e),this.setIsLoading(!1),this.store.showNotif(e.responseMessage,"custom")},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}}))})}deleteMessage(e,t,s){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.messageService.deleteMessage(e).subscribe({next:e=>{this.setState({responseMsg:e}),this.setTotalItems(this.state.totalItems-1),console.log(e),this.loadDataAsync(t,s),this.setIsLoading(!1),this.store.showNotif(e.responseMessage,"custom")},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}}))})}selectMessage(e){this.setState({selectedMessage:e})}setTotalPages(e){this.setState({totalPages:e})}setTotalItems(e){this.setState({totalItems:e})}setCurrentPage(e){this.setState({currentPage:e})}filterMessageByProperty(e,t,s,o){this.setIsLoading(!0),this.messageService.filterMessageByProperty(e,t,s,o).subscribe({next:e=>{0!==e.totalRecords&&(this.setState({messageList:this.fillEmpty(s-1,o,this.state.messageList,e.data)}),console.log("Filtered list"),console.log(this.state.messageList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber})),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}})}filterInfiniteMessageByProperty(e,t,s,o){this.setIsLoading(!0),this.messageService.filterMessageByProperty(e,t,s,o).subscribe({next:e=>{this.setState({messageList:this.state.messageList.concat(e)}),console.log("Filtered list"),console.log(this.state.messageList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}})}searchMessageByProperty(e,t,s,o){this.setIsLoading(!0),this.messageService.searchMessageByProperty(e,t,s,o).subscribe({next:e=>{0!==e.totalRecords?this.setState({messageList:this.fillEmpty(s-1,o,this.state.messageList,e.data)}):this.store.showNotif("No result found!","custom"),console.log("Searched list"),console.log(this.state.messageList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}})}searchInfiniteMessageByProperty(e,t,s,o){this.setIsLoading(!0),this.messageService.searchMessageByProperty(e,t,s,o).subscribe({next:e=>{0!==e.totalRecords?this.setState({messageList:this.state.messageList.concat(e)}):this.store.showNotif("No result found!","custome"),console.log("Infite searched list"),console.log(this.state.messageList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}})}sortMessageByProperty(e,t,s,o){this.setIsLoading(!0),this.messageService.sortMessageByProperty(e,t,s,o).subscribe({next:e=>{this.setState({responseMsg:e}),this.setState({messageList:this.fillEmpty(s-1,o,this.state.messageList,e.data)}),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber}),console.log("Sorted list"),console.log(this.state.messageList),console.log("Server response"),console.log(e),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}})}sortInfiniteMessageByProperty(e,t,s,o){this.setIsLoading(!0),this.messageService.sortMessageByProperty(e,t,s,o).subscribe({next:e=>{this.setState({messageList:this.state.messageList.concat(e)}),console.log("Infite sorted list"),console.log(this.state.messageList),console.log("Server response"),console.log(e),this.setState({totalItems:e.totalRecords}),this.setState({totalPages:e.totalPages}),this.setState({currentPage:e.pageNumber}),this.setIsLoading(!1)},error:e=>{this.setIsLoading(!1),this.store.showNotif(e.error.responseMessage,"error"),console.log(e)}})}getMessage(e){return this.setIsLoading(!0),this.messageService.getMessage(e).toPromise().then(e=>{this.setState({messageInstance:e}),console.log(e),this.setIsLoading(!1)})}setExportData(e){this.setState({messageList:e})}resetState(){this.setState(P)}}return e.\u0275fac=function(t){return new(t||e)(d.LFG(S),d.LFG(y.d))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=s(41612),b=s(69333),L=s(52177),x=s(86101),M=s(83584);function w(e,t){if(1&e&&(d.TgZ(0,"div"),d.TgZ(1,"div",9),d._uU(2),d.qZA(),d.qZA()),2&e){const e=d.oxw();d.xp6(2),d.Oqu(e.selectInfoText)}}function v(e,t){if(1&e&&(d.TgZ(0,"div"),d.TgZ(1,"span"),d._uU(2),d.qZA(),d.qZA()),2&e){const e=d.oxw(2);d.xp6(2),d.hij("Total Message: ",e.messageList.length," ")}}function N(e,t){if(1&e){const e=d.EpF();d.ynx(0),d.TgZ(1,"dx-data-grid",10),d.NdJ("selectedRowKeysChange",function(t){return d.CHM(e),d.oxw().selectedRows=t})("onOptionChanged",function(t){return d.CHM(e),d.oxw().onOptionChanged(t)})("onSelectionChanged",function(){return d.CHM(e),d.oxw().selectionChangedHandler()})("onEditingStart",function(){return d.CHM(e),d.oxw().onEditingStart()})("onInitNewRow",function(){return d.CHM(e),d.oxw().onInitNewRow()})("onSaved",function(t){return d.CHM(e),d.oxw().onSaved(t)})("onEditCanceled",function(){return d.CHM(e),d.oxw().onEditCanceled()})("onToolbarPreparing",function(t){return d.CHM(e),d.oxw().onToolbarPreparing(t)}),d._UZ(2,"dxo-editing",11),d._UZ(3,"dxo-selection",12),d._UZ(4,"dxo-grouping",13),d._UZ(5,"dxo-column-chooser",14),d._UZ(6,"dxo-paging",15),d._UZ(7,"dxo-pager",16),d._UZ(8,"dxo-load-panel",17),d.TgZ(9,"dxi-column",18),d._UZ(10,"dxi-validation-rule",19),d.qZA(),d.TgZ(11,"dxi-column",20),d._UZ(12,"dxi-validation-rule",19),d.qZA(),d._UZ(13,"dxi-column",21),d.TgZ(14,"dxi-column",22),d._UZ(15,"dxi-validation-rule",19),d.qZA(),d.TgZ(16,"dxi-column",23),d._UZ(17,"dxi-validation-rule",19),d.qZA(),d.YNc(18,v,3,1,"div",24),d.qZA(),d.BQk()}if(2&e){const e=d.oxw();d.xp6(1),d.Q6J("dataSource",e.messageList)("showBorders",!0)("allowColumnReordering",!0)("rowAlternationEnabled",!0)("columnHidingEnabled",!0)("selectedRowKeys",e.selectedRows)("sorting",!1),d.xp6(1),d.Q6J("allowUpdating",!0)("allowDeleting",!0)("allowAdding",!0)("useIcons",!0)("selectTextOnEditStart",!0),d.xp6(1),d.Q6J("selectAllMode","page")("showCheckBoxesMode","onClick"),d.xp6(1),d.Q6J("contextMenuEnabled",!0),d.xp6(1),d.Q6J("enabled",!0),d.xp6(1),d.Q6J("pageSize",e.pageSize),d.xp6(1),d.Q6J("visible",!0)("displayMode","adaptive")("allowedPageSizes",e.allowedPageSizes)("showPageSizeSelector",!0)("showNavigationButtons",!0),d.xp6(1),d.Q6J("enabled",!0),d.xp6(10),d.Q6J("dxTemplateOf","totalMessageCount")}}const B=function(){return{paddingLeft:"25px",paddingRight:"25px"}},D=[{path:"",component:(()=>{class e{constructor(e,t,s,o,a){this.messageStore=e,this.store=t,this.messageHTTP=s,this.subjectStore=o,this.router=a,this.subjectList=[],this.pageSize=5,this.allowedPageSizes=[5,10,15],this.scrollingMode="standard",this.currentSortProperty="name",this.currentSearchProperty="name",this.currentFilterProperty="subjectId"}onToolbarPreparing(e){e.toolbarOptions.items.unshift({location:"before",template:"totalMessageCount"},{location:"after",locateInMenu:"auto",widget:"dxButton",options:{type:"normal",icon:"refresh",hint:"Fetch data from server",onClick:this.onRefresh.bind(this)}},{location:"after",locateInMenu:"auto",widget:"dxButton",options:{type:"danger",icon:"trash",hint:"Delete all items",onClick:this.deleteAll.bind(this)}},{location:"after",locateInMenu:"auto",widget:"dxButton",options:{type:"danger",icon:"parentfolder",hint:"Generate random 100+ items",onClick:this.onAddRandom.bind(this)}},{location:"after",locateInMenu:"auto",widget:"dxButton",options:{type:"normal",icon:"exportpdf",hint:"Export to PDF",onClick:this.exportGridToPdf.bind(this)}},{location:"after",locateInMenu:"auto",widget:"dxButton",options:{type:"normal",icon:"xlsxfile",hint:"Export to Excel",onClick:this.exportDataGridToExcel.bind(this)}},{location:"before",widget:"dxTextBox",options:{valueChangeEvent:"keyup",showClearButton:!0,onKeyUp:this.onSearchKeyupHandler.bind(this),onValueChanged:this.onSearchValueChanged.bind(this),mode:"search",placeholder:"Search name"}},{location:"center",locateInMenu:"auto",widget:"dxButton",options:{type:"normal",icon:"filter",disabled:!0,hint:"Filter with subject"}},{location:"center",locateInMenu:"auto",widget:"dxSelectBox",options:{items:this.subjectList,valueExpr:"id",searchExpr:"name",displayExpr:"name",placeholder:"Filter with subject",searchEnabled:!0,onValueChanged:this.onFilterChange.bind(this)}},{location:"center",locateInMenu:"auto",widget:"dxButton",options:{type:"normal",icon:"card",disabled:!0,hint:"Sort by total cost"}},{location:"center",locateInMenu:"auto",widget:"dxSelectBox",options:{items:[{id:"-1",name:"(NONE)"},{id:"0",name:"asc"},{id:"1",name:"desc"}],valueExpr:"name",placeholder:"Sort by name",displayExpr:"name",onValueChanged:this.onSortValueChanged.bind(this)}})}onSearchKeyupHandler(e){clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.isSearchingByName=!0,this.isFilteringByCategory=!1,this.isSortingByName=!1,console.log(this.currentSearchByPropertyValue),""!==this.currentSearchByPropertyValue?this.messageStore.initSearchByPropertyData(this.currentSearchProperty,this.currentSearchByPropertyValue,this.dataGrid.instance.pageIndex()+1,this.pageSize):(this.store.showNotif("SEARCH MODE OFF","custom"),this.onRefresh())},1250)}onSearchValueChanged(e){this.currentSearchByPropertyValue=e.value}onSortValueChanged(e){this.isSortingByName=!0,this.isSearchingByName=!1,this.isFilteringByCategory=!1,this.currentSortByPropertyValue=e.value,"(NONE)"!==e.value?this.messageStore.initSortByPropertyData(this.currentSortProperty,e.value,this.dataGrid.instance.pageIndex()+1,this.pageSize):(this.store.showNotif("SORT MODE OFF","custom"),this.onRefresh())}onFilterChange(e){this.isFilteringByCategory=!0,this.isSearchingByName=!1,this.isSortingByName=!1,this.currentFilterByPropertyValue=e.value,console.log(e.value),"(NONE)"!==e.value?this.messageStore.initFilterByPropertyData(this.currentFilterProperty,e.value,this.dataGrid.instance.pageIndex()+1,this.pageSize):(this.store.showNotif("FILTER MODE OFF","custom"),this.onRefresh())}checkEditorMode(){return!0===this.isFilteringByCategory?"FILTER":!0===this.isSearchingByName?"SEARCH":!0===this.isSortingByName?"SORT":"NORMAL"}onOptionChanged(e){const t=this.checkEditorMode();if("paging.pageIndex"===e.fullName){const s=e.value+1;switch(console.log(`New page index: ${s}. Total items: ${this.messageList.length}`),t){case"NORMAL":this.paginatePureData(s);break;case"FILTER":this.paginateFilterData(s);break;case"SEARCH":this.paginateSearchData(s);break;case"SORT":this.paginateSortData(s)}}if("paging.pageSize"===e.fullName)switch(this.pageSize=e.value,console.log(`Page size changed to ${e.value}`),t){case"NORMAL":this.messageStore.loadDataAsync(this.currentIndexFromServer,e.value),this.goToPage(this.currentIndexFromServer);break;case"FILTER":this.messageStore.filterMessageByProperty(this.currentFilterProperty,this.currentFilterByPropertyValue,this.currentIndexFromServer,e.value),this.goToPage(this.currentIndexFromServer);break;case"SEARCH":this.messageStore.searchMessageByProperty(this.currentSearchProperty,this.currentSearchByPropertyValue,this.currentIndexFromServer,e.value),this.goToPage(this.currentIndexFromServer);break;case"SORT":this.messageStore.sortMessageByProperty(this.currentSortProperty,this.currentSortByPropertyValue,this.currentIndexFromServer,e.value),this.goToPage(this.currentIndexFromServer)}}paginatePureData(e){this.messageStore.loadDataAsync(e,this.pageSize)}paginateFilterData(e){this.messageStore.filterMessageByProperty(this.currentFilterProperty,this.currentFilterByPropertyValue,e,this.pageSize)}paginateSearchData(e){this.messageStore.searchMessageByProperty(this.currentSearchProperty,this.currentSearchByPropertyValue,e,this.pageSize)}paginateSortData(e){this.messageStore.sortMessageByProperty(this.currentSortProperty,this.currentSortByPropertyValue,e,this.pageSize)}onEditingStart(){this.store.showNotif("Edit mode on","custom")}onInitNewRow(){this.store.showNotif("Blank row added, please fill in information","custom")}onSaved(e){if(e.changes.length)switch(e.changes[0].type){case"insert":this.messageStore.uploadMessage(e.changes[0].data,this.dataGrid.instance.pageIndex()+1,this.pageSize);break;case"update":console.log(e.changes[0]),this.messageStore.updateMessage(e.changes[0].data,this.dataGrid.instance.pageIndex()+1,this.pageSize);break;case"remove":this.messageStore.deleteMessage([e.changes[0].key],this.dataGrid.instance.pageIndex()+1,this.pageSize)}else this.store.showNotif("No changes dectected","custom")}onEditCanceled(){this.store.showNotif("Editing cancelled","custom")}selectionChangedHandler(){this.selectedRows.length?(this.isSelectInfoVisible=!0,this.selectInfoText=`${this.selectedRows.length} rows selected`,this.selectedRows.forEach(e=>{console.log(e)})):this.isSelectInfoVisible=!1}changePageSize(e){this.dataGrid.instance.pageSize(e)}goToPage(e){this.dataGrid.instance.pageIndex(e)}deleteSelectedItems(){this.store.setIsLoading(!0);const e=this.checkEditorMode();this.selectedRows.length&&this.messageStore.confirmDialog("").then(t=>{t&&this.messageHTTP.deleteMessage(this.selectedRows).toPromise().then(()=>{switch(this.store.showNotif(`${this.selectedRows.length} items deleted`,"custom"),this.clearSelection(),e){case"NORMAL":this.messageStore.initData(this.dataGrid.instance.pageIndex()+1,this.pageSize);break;case"FILTER":this.messageStore.initFilterByPropertyData(this.currentFilterProperty,this.currentFilterByPropertyValue,this.dataGrid.instance.pageIndex()+1,this.pageSize);break;case"SORT":this.messageStore.initSortByPropertyData(this.currentSortProperty,this.currentSortByPropertyValue,this.dataGrid.instance.pageIndex()+1,this.pageSize);break;case"SEARCH":this.messageStore.initSearchByPropertyData(this.currentSearchProperty,this.currentSearchByPropertyValue,this.dataGrid.instance.pageIndex()+1,this.pageSize)}this.isSelectInfoVisible=!1}).then(()=>{this.store.setIsLoading(!1)})})}clearSelection(){this.selectedRows=[]}onRefresh(){this.isFilteringByCategory=!1,this.isSearchingByName=!1,this.isSortingByName=!1,this.messageStore.initData(this.dataGrid.instance.pageIndex()+1,this.pageSize)}onAddRandom(){this.messageStore.confirmDialog("This will generate random 100+ items in database. Are you sure").then(e=>{e&&(this.isFilteringByCategory=!1,this.store.setIsLoading(!0),this.messageHTTP.generateRandomMessage().toPromise().then(()=>{this.messageStore.initData(this.dataGrid.instance.pageIndex()+1,this.pageSize)}).then(()=>{this.store.setIsLoading(!1),this.store.showNotif("Generated 100+ random items","custom")}))})}exportDataGridToExcel(){this.messageStore.confirmDialog("This will export all fetched data to excel. Are you sure?").then(e=>{e&&(this.store.setIsLoading(!0),this.messageHTTP.fetchAll().toPromise().then(e=>{this.messageStore.setExportData(e),console.log(e),setTimeout(()=>{const e=new g.Workbook,t=e.addWorksheet("Message List");(0,r.d)({component:this.dataGrid.instance,worksheet:t,autoFilterEnabled:!0}).then(()=>{e.xlsx.writeBuffer().then(e=>{c()(new Blob([e],{type:"application/octet-stream"}),"Message_List.xlsx"),this.store.setIsLoading(!1),this.store.showNotif("Export succesully","custom")})})},200)}))})}exportGridToPdf(e){this.messageStore.confirmDialog("This will export all data to pdf. Are you sure?").then(e=>{e&&(this.store.setIsLoading(!0),this.messageHTTP.fetchAll().toPromise().then(e=>{this.messageStore.setExportData(e),console.log(e),setTimeout(()=>{const e=new l.jsPDF;(0,n.d)({jsPDFDocument:e,component:this.dataGrid.instance}).then(()=>{e.save("Message_List.pdf"),this.store.setIsLoading(!1),this.store.showNotif("Export succesully","custom")})},200)}))})}deleteAll(){this.messageStore.deleteAll()}navigateToStatistics(){this.router.navigate(["/statistics"])}sourceDataListener(){return this.messageStore.$messageList.subscribe(e=>{this.messageList=e})}currentPageListener(){return this.messageStore.$currentPage.subscribe(e=>{this.currentIndexFromServer=e})}ngOnInit(){this.sourceDataListener(),this.currentPageListener(),this.subjectStore.fetchAll().then(e=>{0!==e.length&&(console.log("FILTER DATA: "),console.log(e),this.subjectList=e,this.subjectList.unshift({id:"(NONE)",name:"(NONE)"}),setTimeout(()=>{this.onRefresh()},150))})}ngOnDestroy(){this.sourceDataListener().unsubscribe(),this.currentPageListener().unsubscribe(),this.messageStore.resetState()}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(f),d.Y36(y.d),d.Y36(S),d.Y36(I.Z),d.Y36(a.F0))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-edit-message-list"]],viewQuery:function(e,t){if(1&e&&d.Gf(i.e,5),2&e){let e;d.iGM(e=d.CRH())&&(t.dataGrid=e.first)}},decls:9,vars:7,consts:[[3,"ngStyle"],[3,"location","text"],["location","center","locateInMenu","auto",3,"visible"],[4,"dxTemplate"],["location","center","locateInMenu","auto"],["icon","trash","type","danger","hint","Delete current selected items",3,"visible","onClick"],["location","after","locateInMenu","auto"],["icon","arrowright","type","outline","text","Statistics","hint","Navigate to Statistics",3,"onClick"],[4,"ngIf"],[2,"font-size","small"],["id","gridContainer","keyExpr","id",3,"dataSource","showBorders","allowColumnReordering","rowAlternationEnabled","columnHidingEnabled","selectedRowKeys","sorting","selectedRowKeysChange","onOptionChanged","onSelectionChanged","onEditingStart","onInitNewRow","onSaved","onEditCanceled","onToolbarPreparing"],[3,"allowUpdating","allowDeleting","allowAdding","useIcons","selectTextOnEditStart"],["mode","multiple",3,"selectAllMode","showCheckBoxesMode"],["expandMode","rowClick",3,"contextMenuEnabled"],["mode","select",3,"enabled"],[3,"pageSize"],[3,"visible","displayMode","allowedPageSizes","showPageSizeSelector","showNavigationButtons"],[3,"enabled"],["dataField","content"],["type","required"],["dataField","fileURL"],["dataField","isSeen","dataType","boolean"],["dataField","senderId"],["dataField","recipientId"],[4,"dxTemplate","dxTemplateOf"]],template:function(e,t){1&e&&(d.TgZ(0,"dx-toolbar",0),d._UZ(1,"dxi-item",1),d.TgZ(2,"dxi-item",2),d.YNc(3,w,3,1,"div",3),d.qZA(),d.TgZ(4,"dxi-item",4),d.TgZ(5,"dx-button",5),d.NdJ("onClick",function(){return t.deleteSelectedItems()}),d.qZA(),d.qZA(),d.TgZ(6,"dxi-item",6),d.TgZ(7,"dx-button",7),d.NdJ("onClick",function(){return t.navigateToStatistics()}),d.qZA(),d.qZA(),d.qZA(),d.YNc(8,N,19,24,"ng-container",8)),2&e&&(d.Q6J("ngStyle",d.DdM(6,B)),d.xp6(1),d.Q6J("location","before")("text","Message Mananagement"),d.xp6(1),d.Q6J("visible",t.isSelectInfoVisible),d.xp6(3),d.Q6J("visible",t.isSelectInfoVisible),d.xp6(3),d.Q6J("ngIf",0!==t.subjectList.length))},directives:[b.G,o.PC,L.ZT3,x.p6,M.K,o.O5,i.e,L.Uo8,L.Lz9,L.uCj,L.Auv,L.sXh,L.ilc,L.mKI,L.qvW,L.vrV],styles:[""]}),e})()}];let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[a.Bz.forChild(D)],a.Bz]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[o.ez,R,i.x,b.k,M.e]]}),e})()}}]);