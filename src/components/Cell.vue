<template>
    <div>
        <div v-for="(usernames, leave) in check" :key="leave">
            <p>leave at {{leave|humanFormat}} : {{usernames.join(',')}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],

    computed: {
        check: function () {
            let output = []

            output = this.data.filter(function (record) {
                return record.leave < 1700;
            })

            let groupedOutput = output.reduce(function(x, y) {
                (x[y.leave] = x[y.leave] || []).push(y.name);

                return x;
            }, {});

            return groupedOutput;
        }
    },
    filters: {
        humanFormat: function (value) {
            return value.slice(0, 2) + ":" + value.slice(2);
        }
    }
}
</script>