(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);
	

	
	
	var definition = { 
		typeName: "simplevalue",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		getDefaultConfig: function(){ 
			return { 
				
				Height: 150,
				Width: 150,
				BackgroundColor: '#ff5733',
				TextColor: "Black",
				//AlarmColor: "Red",
				BorderRadius: 10,
				DisplayDigits: 1,
				//AlarmValue: 1000
				
			} 
		},
		configOptions: function(){
			return [
			{
				title: "Format Symbol",
				mode: "format"
			}
			];
		}
	}
	//var ActualText = scope.config.TextColor;
	


	symbolVis.prototype.init = function(scope, elem) { 
	
		this.onDataUpdate = dataUpdate;
	
		function dataUpdate(data){
			if(!data) return;
			if(data.Label){
				//sporadic
				scope.Label = data.Label;
				scope.Units = data.Units;
			}
			//if (data.Value > config.AlarmValue){
				//ActualText = AlarmColor;
			//}
			scope.Time = data.Time;
			scope.Value = data.Value;
			

		}
	};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
