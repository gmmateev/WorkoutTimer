define(["jquery", "backbone", "models/workoutModel"],
    function ($, Backbone, WorkoutModel) {
        var WorkoutsView = Backbone.View.extend({
            initialize: function () {
                if (this.collection) {
                    this.collection.on("added", this.render, this);
                }

                if (this.model) {
                    this.model.on("change", this.render, this);
                }
            },

            render: function () {
                this.template = _.template($("script#workoutsTemplate").html(), { "collection": this.collection });

                this.$el.html(this.template);

                return this;
            }
        });

        return WorkoutsView;
    });